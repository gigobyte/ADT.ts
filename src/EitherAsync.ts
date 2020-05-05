import { Either, Left, Right } from './Either'
import { MaybeAsync } from './MaybeAsync'

export interface EitherAsync<L, R> {
  /**
   * It's important to remember how `run` will behave because in an
   * async context there are other ways for a function to fail other
   * than to return a Nothing, for example:
   * If any of the computations inside EitherAsync resolved to a Left,
   * `run` will return a Promise resolved to that Left.
   * If any of the promises were to be rejected then `run` will return
   * a Promise resolved to a Left with the rejection value inside
   * If an exception is thrown then `run` will return a Promise
   * resolved to a Left with the exception inside
   * If none of the above happen then a promise resolved to the
   * returned value wrapped in a Right will be returned
   */
  run(): Promise<Either<L, R>>
  /** Transforms the `Right` value of `this` with a given function. If the EitherAsync that is being mapped resolves to a Left then the mapping function won't be called and `run` will resolve the whole thing to that Left, just like the regular Either#map */
  map<R2>(f: (value: R) => R2): EitherAsync<L, R2>
  /** Maps the `Left` value of `this`, acts like an identity if `this` is `Right` */
  mapLeft<L2>(f: (value: L) => L2): EitherAsync<L2, R>
  /** Transforms `this` with a function that returns a `EitherAsync`. Behaviour is the same as the regular Either#chain */
  chain<R2>(f: (value: R) => EitherAsync<L, R2>): EitherAsync<L, R2>
  /** The same as EitherAsync#chain but executes the transformation function only if the value is Left. Useful for recovering from errors */
  chainLeft<L2>(f: (value: L) => EitherAsync<L2, R>): EitherAsync<L2, R>
  /** Converts `this` to a MaybeAsync, discarding any error values */
  toMaybeAsync(): MaybeAsync<R>
  /** Returns `Right` if `this` is `Left` and vice versa */
  swap(): EitherAsync<R, L>

  'fantasy-land/map'<R2>(f: (value: R) => R2): EitherAsync<L, R2>
  'fantasy-land/chain'<R2>(
    f: (value: R) => EitherAsync<L, R2>
  ): EitherAsync<L, R2>
}

export interface EitherAsyncValue<R> extends PromiseLike<R> {}

export interface EitherAsyncHelpers<L> {
  /** Allows you to take a regular Either value and lift it to the EitherAsync context. Awaiting a lifted Either will give you the `Right` value inside. If the Either is Left then the function will exit immediately and EitherAsync will resolve to that Left after running it */
  liftEither<R>(either: Either<L, R>): EitherAsyncValue<R>
  /** Allows you to take an Either inside a Promise and lift it to the EitherAsync context. Awaiting a lifted Promise<Either> will give you the `Right` value inside the Either. If the Either is Left or the Promise is rejected then the function will exit immediately and MaybeAsync will resolve to that Left or the rejection value after running it */
  fromPromise<R>(promise: PromiseLike<Either<L, R>>): EitherAsyncValue<R>
  /** A type safe version of throwing an exception. Unlike the Error constructor, which will take anything, throwE only accepts values of the same type as the Left part of the Either */
  throwE(error: L): never
}

const helpers: EitherAsyncHelpers<any> = {
  liftEither<L, R>(either: Either<L, R>): EitherAsyncValue<R> {
    if (either.isLeft()) {
      throw either.__value
    }

    return Promise.resolve(either.__value as R)
  },
  fromPromise<L, R>(promise: PromiseLike<Either<L, R>>): EitherAsyncValue<R> {
    return promise.then(helpers.liftEither) as any
  },
  throwE<L>(error: L): never {
    throw error
  }
}

class EitherAsyncImpl<L, R> implements EitherAsync<L, R> {
  constructor(
    private runPromise: (helpers: EitherAsyncHelpers<L>) => PromiseLike<R>
  ) {}

  async run(): Promise<Either<L, R>> {
    try {
      return Right(await this.runPromise(helpers))
    } catch (e) {
      return Left(e)
    }
  }

  map<R2>(f: (value: R) => R2): EitherAsync<L, R2> {
    return EitherAsync((helpers) => this.runPromise(helpers).then(f))
  }

  mapLeft<L2>(f: (value: L) => L2): EitherAsync<L2, R> {
    return EitherAsync(async (helpers) => {
      try {
        return await this.runPromise((helpers as any) as EitherAsyncHelpers<L>)
      } catch (e) {
        throw f(e)
      }
    })
  }

  chain<R2>(f: (value: R) => EitherAsync<L, R2>): EitherAsync<L, R2> {
    return EitherAsync(async (helpers) => {
      const value = await this.runPromise(helpers)
      return helpers.fromPromise(f(value).run())
    })
  }

  chainLeft<L2>(f: (value: L) => EitherAsync<L2, R>): EitherAsync<L2, R> {
    return EitherAsync(async (helpers) => {
      try {
        return await this.runPromise((helpers as any) as EitherAsyncHelpers<L>)
      } catch (e) {
        return helpers.fromPromise(f(e).run())
      }
    })
  }

  toMaybeAsync(): MaybeAsync<R> {
    return MaybeAsync(async ({ liftMaybe }) => {
      const either = await this.run()
      return liftMaybe(either.toMaybe())
    })
  }

  swap(): EitherAsync<R, L> {
    return EitherAsync(async (helpers) => {
      const either = await this.run()
      if (either.isRight()) helpers.throwE(either.extract() as R)
      return helpers.liftEither(Right(either.extract() as L))
    })
  }

  'fantasy-land/map'<R2>(f: (value: R) => R2): EitherAsync<L, R2> {
    return this.map(f)
  }

  'fantasy-land/chain'<R2>(
    f: (value: R) => EitherAsync<L, R2>
  ): EitherAsync<L, R2> {
    return this.chain(f)
  }
}

/** Constructs an EitherAsync object from a function that takes an object full of helpers that let you lift things into the EitherAsync context and returns a Promise */
export const EitherAsync = <L, R>(
  runPromise: (helpers: EitherAsyncHelpers<L>) => PromiseLike<R>
): EitherAsync<L, R> => new EitherAsyncImpl(runPromise)

/** Constructs an EitherAsync object from a function that returns an Either wrapped in a Promise */
export const fromPromise = <L, R>(
  f: () => Promise<Either<L, R>>
): EitherAsync<L, R> => EitherAsync(({ fromPromise: fP }) => fP(f()))

/** Constructs an EitherAsync object from a function that returns a Promise. The left type is defaulted to the built-in Error type */
export const liftPromise = <R, L = Error>(
  f: () => Promise<R>
): EitherAsync<L, R> => EitherAsync(f)

/** Constructs an EitherAsync object from an Either */
export const liftEither = <L, R>(either: Either<L, R>): EitherAsync<L, R> =>
  EitherAsync(({ liftEither }) => liftEither(either))
