import{createPagination, changePage} from './pagination/pagination.js';
import{createProductsMarkup} from './products/products.js';
import { getProductInfo, addProduct } from "./shop/shop-services.js";
import { addToCart } from "./cart/cart.js";

export const refs ={
    productForm: document.forms.productForm,
    productList: document.querySelector('.productList'),
    productPagination: document.querySelector('.productPagination')
}

createProductsMarkup();
createPagination();
const activePage = document.querySelector('.paginationPageItem');
activePage.classList.add('activePaginationPageItem');

refs.productForm.addEventListener('input', getProductInfo);
refs.productForm.addEventListener('submit', addProduct);
refs.productList.addEventListener('click', addToCart);
refs.productPagination.addEventListener('click', changePage)