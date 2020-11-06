import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

class ProductService implements IProductService{
  private dataSource: SimpleDataSource;
  private products : Array<Product>;

  constructor(){
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach(p => this.products.push(p));
  }

  getById(id: number): Product {
    return this.products.filter(p => p.id === id)[0];
  }
  getProducts(): Product[] {

  }
  saveProduct(product: Product): void {

  }
  deleteProduct(product: Product): void {

  }

}
