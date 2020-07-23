export type Date = unknown & { __date: never };

function assertDate(x: unknown): asserts x is Date {
  if (typeof x === "number" && (x < 1 || x > 31)) {
    throw new Error(`日として不正な値を検出しました: ${x}`);
  }
}

export function toDate(n: number): Date {
  assertDate(n);
  return n as Date;
}
