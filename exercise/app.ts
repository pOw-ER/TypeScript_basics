import { ProductService } from "./ProductService";
import { Product } from './Product';

let _ProductService = new ProductService();

let result;


// result = _ProductService.getById(2);

// _ProductService.deleteProduct(result); // funktioniert
let p = new Product();

p.id = 2;
p.name = 'Iphone 8s';
p.category = 'smartphone';
p.price = 5000;

_ProductService.saveProduct(p); // funktioniert auch 2. element ist schon erneuert werden

result = _ProductService.getProducts();


console.log(result);


