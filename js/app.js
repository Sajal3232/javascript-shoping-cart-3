const cartinfo=document.querySelector("#cart-info");

const cart=document.querySelector("#cart");

cartinfo.addEventListener("click", function(){
    cart.classList.toggle("show-cart");           //style.css
})


// add item  show the cart

const cartBtn= document.querySelectorAll(".store-item-icon");
cartBtn.forEach(function(btn){
    btn.addEventListener("click",function(event){
        // console.log(event.target);
    })
})
