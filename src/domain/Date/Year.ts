export type Year = unknown & { __year: never };

function assertYear(x: unknown): asserts x is Year {
  if (typeof x === "number" && x < 1970) {
    throw new Error(`年として不正な値を検出しました: ${x}`);
  }
}

export function fromNumberToYear(n: number): Year {
  assertYear(n);
  return n as Year;
}

export function fromYearToNumber(year: Year): number {
  return (year as unknown) as number;
}
