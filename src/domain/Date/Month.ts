export type Month = unknown & { __month: never };

function assertMonth(x: unknown): asserts x is Month {
  if (typeof x === "number" && (x < 1 || x > 12)) {
    throw new Error(`月として不正な値を検出しました: ${x}`);
  }
}

export function fromNumberToMonth(n: number): Month {
  assertMonth(n);
  return n as Month;
}

export function fromMonthToNumber(month: Month): number {
  return (month as unknown) as number;
}
