export class Month {
  private constructor(private month: number) {
    if (month < 1 || month > 12) {
      throw new Error(`月として不正な値を検出しました: ${month}`);
    }
  }

  static fromNumber(n: number): Month {
    return new Month(n);
  }

  toNumber(): number {
    return this.month;
  }
}
