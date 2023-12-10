export class Image {
  public isLocked: boolean = false;
  private _id: string;
  private isSelected: boolean = false;

  static counter: number = 0;

  constructor(private _src: string) {
    this._id = (++Image.counter).toString();
  }

  toggleLock(): Image {
    this.isLocked = !this.isLocked;
    return this;
  }

  getCssUrl () : string {
    return `url('${this._src}')`;
  }

  public get id(): string {
    return this._id;
  }

  public get src(): string {
    return this._src;
  }

}
