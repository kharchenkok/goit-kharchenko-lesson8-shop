import { shop } from "../shop/shop.js";
import { refs } from "../index.js";
import{createProductsMarkup} from '../products/products.js';


 const createPaginationPage = (pageNumber)=>{
    return `
    <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`
}

const getActivePage=() =>{
    const pages =document.querySelectorAll('.paginationPageItem');
    pages[shop.pagination.currentPage-1].classList.add('activePaginationPageItem');

}

export const changePage = (e)=>{
    shop.pagination.currentPage = e.target.dataset.page;
    createProductsMarkup();
    createPagination();
}

export const createPaginationMarkup =() =>{
    let markup='';
    for(let i=1; i<=shop.pagination.pagesCount; i+=1){
        markup+=createPaginationPage(i)
    }
    return markup
}

export const createPagination = ()=>{
    shop.pagination.totalProducts = shop.products.length;
    shop.pagination.pagesCount=Math.ceil(shop.pagination.totalProducts/shop.pagination.productsPerPage);
    refs.productPagination.innerHTML=createPaginationMarkup();
    getActivePage();

}