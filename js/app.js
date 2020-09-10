const cartinfo=document.querySelector("#cart-info");

(function(){
    cartinfo.addEventListener("click", function(){
        cart.classList.toggle("show-cart");           //style.css
    })
    
    
    // add item  show the cart
    
    const cartBtn= document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function(btn){
        btn.addEventListener("click",function(event){
            // console.log(event.target);
    
            if(event.target.parentElement.classList.contains("store-item-icon"))
            {
                let fullPath=event.target.parentElement.previousElementSibling.src;
               let position= fullPath.indexOf("img") + 3;
            //    console.log(fullPath);
                let partPath=fullPath.slice(position);
    
                // console.log(partPath);
                const item={};
                item.img=`img-cart${partPath}`;
                // console.log(img);
               
                let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name=name;
                // console.log(name);
    
                let price= event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
    
                let finalPrice=price.slice(1).trim();
                // console.log(finalPrice);
                // item.price=finalPrice;
                // console.log(item);
    
                const cartItem=document.createElement("div");
                cartItem.classList.add(
                    "cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3"
                );
                cartItem.innerHTML=
                `
                <img src="${
                    item.img
                }" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">
                  <p id="cart-item-title" class="font-weight-bold mb-0">${
                      item.name
                    }</p>
                  <span>$</span>
                  <span id="cart-item-price" class="cart-item-price" class="mb-0">${
                      item.price
                    }</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                  <i class="fas fa-trash"></i>
                </a>
              `;
    
              const cart=document.getElementById("cart");
              const total=document.querySelector(".cart-total-container");
              cart.insertBefore(cartItem, total);
              alert("Item added to the chart");
              showTotals();
    
            }
        });
    
    });
    function showTotals(){
        const total = new Array();
        const items=document.querySelectorAll(".cart-item-price");
        items.forEach(function(item){
        total.push(parseInt(item.textContent));
        });
        console.log(total);
    }


     
        
        // const totalMoney=total.reduce(function(total, item){
        //    total+=item;
        //    return total;
        // },0);
        // console.log(totalMoney);
    // }
})();







