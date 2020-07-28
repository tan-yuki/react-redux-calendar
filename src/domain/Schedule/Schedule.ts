export class Schedule {
  private constructor(private title: string, private content: string) {
    if (title.length === 0) {
      throw new Error("titleが入力されていません");
    }
  }

  static create(title: string, content: string) {
    return new Schedule(title, content);
  }
}
