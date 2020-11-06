"use strict";
exports.__esModule = true;
var ProductService_1 = require("./ProductService");
var Product_1 = require("./Product");
var _ProductService = new ProductService_1.ProductService();
var result;
// result = _ProductService.getById(2);
// _ProductService.deleteProduct(result); // funktioniert
var p = new Product_1.Product();
p.id = 2;
p.name = 'Iphone 8s';
p.category = 'smartphone';
p.price = 5000;
_ProductService.saveProduct(p);
result = _ProductService.getProducts();
console.log(result);
