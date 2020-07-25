export class Date {
  private constructor(private date: number) {
    if (date < 1 || date > 31) {
      throw new Error(`日として不正な値を検出しました: ${date}`);
    }
  }

  static fromNumber(n: number): Date {
    return new Date(n);
  }

  toNumber(): number {
    return this.date;
  }
}
