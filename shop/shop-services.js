import { shop } from "./shop.js";
import { refs } from "../index.js";
import { createProductMarkup, createProductsMarkup } from "../products/products.js";
import{createPagination} from '../pagination/pagination.js';

// Отримання данних з форми і запис в обєкт shop.product
export const getProductInfo = (e) =>{
    shop.product[e.target.name] = e.target.value
    
}

// Додавання одної одиниці товару в shop.products
export const addProduct =(e)=>{
    e.preventDefault();
    const newProduct = {...shop.product, id:`${Date.now()}`}
    shop.products=[newProduct,...shop.products]
    refs.productForm.reset();   
    shop.product.name = '';
    shop.product.price= 0;
    refs.productList.insertAdjacentHTML('afterbegin', createProductMarkup(newProduct));
    createPagination();
    createProductsMarkup();
    console.log(shop);
}
export const getProducts = ()=>{
    const finish = shop.pagination.productsPerPage * shop.pagination.currentPage;
    const start = finish-shop.pagination.productsPerPage;
    const products = shop.products.slice(start,finish);
    return products;
}