export class Year {
  private constructor(private year: number) {
    if (year < 1970) {
      throw new Error(`年として不正な値を検出しました: ${year}`);
    }
  }

  static fromNumber(n: number): Year {
    return new Year(n);
  }

  toNumber(): number {
    return this.year;
  }
}
