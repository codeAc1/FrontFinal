
 AOS.init();

let ProductList =document.querySelectorAll("#ProList .product-cart .pro-bottom .add-cart")
for(AddCartBtn of ProductList){
    AddCartBtn.addEventListener("click",function(e){
        e.preventDefault()
        alert("ok")
    })
}



 





