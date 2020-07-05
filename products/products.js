 
 import { getProducts } from "../shop/shop-services.js";
 import { refs } from "../index.js";
 


 export const createProductMarkup =(product) =>{
    return `
    <li class="productListItem" data-id=${product.id}>
    <h2 class="productListItemTitle">${product.name}</h2>
        <p class="productListItemPrice">${product.price}</p>
        <button type="button">Add to cart</button>
        </li>`
    }


 // Створення розмітки для відображення всіх товарів з масиву shop.products
export const createProductsMarkup =()=>{
    const markup= getProducts().reduce((acc, product) =>{
        acc+= createProductMarkup(product)
        return acc
    }, '')
    refs.productList.innerHTML=markup
}