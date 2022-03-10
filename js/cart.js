function BasketDiv() {


    let products = JSON.parse(localStorage.getItem("basket"));
    let count = 1;
    for (let product of products) {
        let cart_body =document.createElement("div")
        cart_body.classList.add("cart-body","d-flex","justify-content-between","align-items-center")

        let cart_body_left=document.createElement("div");
        cart_body_left.classList.add("cart-body-left","d-flex","align-items-center");

        let pro_check=document.createElement("div")
        pro_check.classList.add("pro-check")

        let checkbox=document.createElement("input")
        checkbox.setAttribute("type", "checkbox");

        let pro_image=document.createElement("div")
        pro_image.classList.add("pro-image")

        let img = document.createElement("img");
        img.setAttribute("src", product.Src);

        let pro_detail=document.createElement("div");
        pro_detail.classList.add("pro-detail")

        let pro_name=document.createElement("a")
        pro_name.classList.add("pro-name");

        let star_1=document.createElement("i");
        star_1.classList.add("fa-solid","fa-star");

        let star_2=document.createElement("i");
        star_2.classList.add("fa-solid","fa-star");

        let star_3=document.createElement("i");
        star_3.classList.add("fa-solid","fa-star");

        let star_4=document.createElement("i");
        star_4.classList.add("fa-solid","fa-star");

        let star_5=document.createElement("i");
        star_5.classList.add("fa-solid","fa-star");

        let pro_rait=document.createElement("span");
        pro_rait.classList.add("pro-rait-text");



        let pro_rait_text =document.createElement("div");
        pro_rait_text.classList.add("cart-body-right","d-flex","align-items-center","justify-content-between")

        let pro_price=document.createElement("div");
        pro_price.classList.add("pro-price");

        let pro_price_phone=document.createElement("h6");
        pro_price_phone.classList.add("d-block","d-md-none");

        let pro_price_desk=document.createElement("h4");
        pro_price_desk.classList.add("pro-price-value")

        let pro_price_cur=document.createElement("span")
        pro_price_cur.innerText="$";


        let pro_quantity=document.createElement("div");
        pro_quantity.classList.add("pro-quantity");

        let pro_quantity_text=document.createElement("h6");
        pro_quantity_text.classList.add("d-block","d-md-none")
        pro_quantity_text.innerText="Stock";
        






        // let item = document.createElement("div");
        // item.classList.add("item", "row", "align-items-center");

        // let image = document.createElement("div");
        // image.classList.add("image", "col-lg-3")

        // let name = document.createElement("div");
        // name.classList.add("name", "col-lg-2")

        // let count = document.createElement("div");
        // count.classList.add("count", "col-lg-2")

        // let price = document.createElement("div");
        // price.classList.add("price", "col-lg-2");

        // let amount = document.createElement("div");
        // amount.classList.add("amount", "col-lg-2");

        // let del = document.createElement("div");
        // del.classList.add("delete", "col-lg-1");




        // let img = document.createElement("img");
        // img.setAttribute("src", product.Src);
        // image.append(img);

        // let nameText = document.createElement("h5")
        // nameText.innerText = product.Name;
        // name.append(nameText)

        // let countText = document.createElement("h5")
        // countText.innerText = product.Count;
        // count.append(countText)

        // let priceText = document.createElement("h5")
        // priceText.innerText = product.Price + "$";
        // price.append(priceText)

        // let amountText = document.createElement("h5")
        // amountText.innerText = (product.Count * product.Price) + "$";
        // amount.append(amountText)

        // let delbtn = document.createElement("button")
        // delbtn.innerText = "X"
        // del.append(delbtn)

        // item.append(image, name, count, price, amount, del);
        // document.querySelector("#Dinamic").append(item)

        let item = document.createElement("div")
        item.innerText="salam"
        document.getElementById("Cart_Main").append(checkbox)
    }

    
}

BasketDiv();

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let countItem = basket.length
    document.getElementById("ProCount").innerText = countItem;
    
}
CountBasket();

// let Cart_box =document.getElementById("Cart_Main")

// console.log(Cart_box)


