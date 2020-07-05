const refs ={
    productForm: document.forms.productForm,
    productList: document.querySelector('.productList'),
    productPagination: document.querySelector('.productPagination')
}
// const shop = {
//     products:[{id: "1593960225809", name: "water", price: "12"},{id: "1593960225810", name: "milk", price: "20"}],
//     product: {
//         name:'',
//         price:0,         
//     },
//     pagination:{
//         currentPage:1,
//         totalProducts:0,
//         productsPerPage:4,
//         pagesCount:0
//     },
//     cart:[],
// };


// Отримання данних з форми і запис в обєкт shop.product
// const getProductInfo = (e) =>{
//     shop.product[e.target.name] = e.target.value
    
// }

// Додавання одної одиниці товару в shop.products
// const addProduct =(e)=>{
//     e.preventDefault();
//     const newProduct = {...shop.product, id:`${Date.now()}`}
//     shop.products=[newProduct,...shop.products]
//     refs.productForm.reset();   
//     shop.product.name = '';
//     shop.product.price= 0;
//     refs.productList.insertAdjacentHTML('afterbegin', createProductMarkup(newProduct));
//     createPagination();
//     createProductsMarkup();
//     console.log(shop);
// }

// const getProducts = ()=>{
//     const finish = shop.pagination.productsPerPage * shop.pagination.currentPage;
//     const start = finish-shop.pagination.productsPerPage;
//     const products = shop.products.slice(start,finish);
//     return products;
// }
// Створення шаблону для однієї одиниці товару
// const createProductMarkup =(product) =>{
//     return `
//     <li class="productListItem" data-id=${product.id}>
//     <h2 class="productListItemTitle">${product.name}</h2>
//         <p class="productListItemPrice">${product.price}</p>
//         <button type="button">Add to cart</button>
//         </li>`
//     }
    // Створення розмітки для відображення всіх товарів з масиву shop.products
// const createProductsMarkup =()=>{
//     const markup= getProducts().reduce((acc, product) =>{
//         acc+= createProductMarkup(product)
//         return acc
//     }, '')
//     refs.productList.innerHTML=markup
// }

// ================================cart==========================



// const addToCart = (e) => {
//     const parent = e.target.closest('[data-id]')
//     const id = parent.dataset.id;
//     const product = shop.products.find(product => product.id === id)
//     shop.cart =[...shop.cart,product]
    
//     console.log(shop.cart);
    
// }
// ==============pagination==================
// const createPaginationPage = (pageNumber)=>{
//     return `
//     <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`
// }

// const createPaginationMarkup =() =>{
//     let markup='';
//     for(let i=1; i<=shop.pagination.pagesCount; i+=1){
//         markup+=createPaginationPage(i)
//     }
//     return markup
// }

// const getActivePage=() =>{
//     const pages =document.querySelectorAll('.paginationPageItem');
//     pages[shop.pagination.currentPage-1].classList.add('activePaginationPageItem');

// }
// const createPagination = ()=>{
//     shop.pagination.totalProducts = shop.products.length;
//     shop.pagination.pagesCount=Math.ceil(shop.pagination.totalProducts/shop.pagination.productsPerPage);
//     refs.productPagination.innerHTML=createPaginationMarkup();
//     getActivePage();

// }

// const changePage = (e)=>{
//     shop.pagination.currentPage = e.target.dataset.page;
//     createProductsMarkup();
//     createPagination();
// }



createProductsMarkup();
createPagination();
const activePage = document.querySelector('.paginationPageItem');
activePage.classList.add('activePaginationPageItem');

refs.productForm.addEventListener('input', getProductInfo);
refs.productForm.addEventListener('submit', addProduct);
refs.productList.addEventListener('click', addToCart);
refs.productPagination.addEventListener('click', changePage)