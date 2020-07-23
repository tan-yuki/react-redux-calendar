export type Month = number & { __month: never };

function assertMonth(x: number): asserts x is Month {
  if (x < 1 || x > 12) {
    throw new Error(`月として不正な値を検出しました: ${x}`);
  }
}

export function toMonth(n: number): Month {
  assertMonth(n);
  return n as Month;
}
