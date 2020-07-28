export class Schedule {
  private constructor(private title: string, private content: string) {}

  static throwErrorIfInvalidate(title: string, content: string) {
    if (title.length === 0) {
      throw new Error("titleが入力されていません");
    }
  }

  static create(title: string, content: string): Schedule {
    this.throwErrorIfInvalidate(title, content);

    return new Schedule(title, content);
  }

  static createEmpty(): Schedule {
    return new Schedule("", "");
  }
}
