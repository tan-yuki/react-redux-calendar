export type Year = number & { __year: never };

function assertYear(x: number): asserts x is Year {
  if (x < 1970) {
    throw new Error(`年として不正な値を検出しました: ${x}`);
  }
}

export function toYear(n: number): Year {
  assertYear(n);
  return n as Year;
}
