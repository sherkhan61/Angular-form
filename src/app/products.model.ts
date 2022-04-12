export class Products {
  public productName: string;
  public category: string;
  public date: Date;
  public freshness: string;
  public price: number;
  public comment: string;

  constructor(productName: string, category: string, date: Date, freshness: string, price: number, comment: string) {
    this.productName = productName;
    this.category = category;
    this.date = date;
    this.freshness = freshness;
    this.price = price;
    this.comment = comment;
  }
}
