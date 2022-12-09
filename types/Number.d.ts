interface Number {
  mod: (num: number) => number
}

interface Array<T> {
  findLast(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): string
  findLastIndex(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any
  ): number
}