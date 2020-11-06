import { ProductService } from "./ProductService";
import { Product } from './Product';

let _ProductService = new ProductService();

let result;

result = _ProductService.getProducts();



console.log(result);

