function getSessionStorageDataByKey(key, defaultValue = undefined) {
    let data = sessionStorage.getItem(key);
    if (data) {
        return typeof data == "string" ? data : JSON.parse(data)
    }
    else {
        return defaultValue;
    }
}

let isSignUp = getSessionStorageDataByKey("isSignUp", true)
let isOutOfCart = getSessionStorageDataByKey("isOutOfCart", false);
let isAddressSelected = getSessionStorageDataByKey("isAddressSelected", false)
let isPaymentDone = getSessionStorageDataByKey("isPaymentDone", false)
function setHeaderTagIcons(isOutOfCart, isAddressSelected, isPaymentDone) {
    const cartTag = document.getElementById("header-cartTag")
    const addressTag = document.getElementById("header-addressTag")
    const paymentTag = document.getElementById("header-paymentTag")
    cartTag.innerHTML = `<img class="h-3vw mr-2 py-1" src="../images/${!isOutOfCart ? "edit-icon.svg" : "tick-icon.svg"}" alt="1" srcset="">
                            CART`
    addressTag.innerHTML = ` <img class="h-3vw mr-2 py-1" src="../images/${(!isOutOfCart && !isAddressSelected) ? "2.png" : (isOutOfCart && !isAddressSelected) ? "edit-icon.svg" : isOutOfCart ? "tick-icon.svg" : "2.png"}" alt="2" srcset="">
                            ADDRESS`
    paymentTag.innerHTML = ` <img class="h-3vw mr-2 py-1" src="../images/${(isOutOfCart && !isAddressSelected && !isPaymentDone) ? "3.png" : (isOutOfCart && isAddressSelected && !isPaymentDone) ? "edit-icon.svg" : (isOutOfCart && isAddressSelected) ? "tick-icon.svg" : "3.png"}" alt="3" srcset=""> PAYMENT`
}
setHeaderTagIcons(isOutOfCart, isAddressSelected, isPaymentDone)
 

let cartProductArr = [
    {
        "_id": {
          "$oid": "63c792f08c3acd2b146dff32"
        },
        "name": "Kurta",
        "imageUrl": "https://m.media-amazon.com/images/I/51w7vLDofaL._UX679_.jpg",
        "price": 999,
        "discount": 10,
        "sizes": [
          "2XS",
          "3XS",
          "4XL",
          "M",
          "XL"
        ],
        "noOfProducts": 100,
        "category": "kurtas",
        "gender": "female",
        "color": [
          "black",
          "red",
          "white",
          "gray"
        ],
        "materialDetails": "Best Quality",
        "review": [],
        "__v": 0,
        "brandName": "Adidas"
      },{
        "_id": {
          "$oid": "63c7939e8c3acd2b146dff34"
        },
        "name": "Kurta",
        "imageUrl": "https://m.media-amazon.com/images/I/31hFpoY7fBL._SX342_SY445_.jpg",
        "price": 1500,
        "discount": 20,
        "sizes": [
          "2XL",
          "2XS",
          "L",
          "M",
          "S",
          "XL",
          "XS"
        ],
        "noOfProducts": 50,
        "category": "kurtas",
        "gender": "female",
        "color": [
          "pink",
          "red",
          "white",
          "gray",
          "blue"
        ],
        "materialDetails": "Best Quality",
        "review": [],
        "__v": 0,
        "brandName": "Puma"
      },{
        "_id": {
          "$oid": "63c793dd8c3acd2b146dff36"
        },
        "name": "Kurta",
        "imageUrl": "https://m.media-amazon.com/images/I/51PD0BnTXjL._UX679_.jpg",
        "price": 100,
        "discount": 30,
        "sizes": [
          "3XL",
          "S",
          "XL",
          "XS"
        ],
        "noOfProducts": 0,
        "category": "kurtas",
        "gender": "female",
        "color": [
          "pink",
          "red",
          "white",
          "gray",
          "violet"
        ],
        "materialDetails": "Best Quality",
        "review": [],
        "__v": 0,
        "brandName": "Rebook"
      },{
        "_id": {
          "$oid": "63c7940c8c3acd2b146dff38"
        },
        "name": "Kurta",
        "imageUrl": "https://m.media-amazon.com/images/I/31lRTbzdsJL._SY445_SX342_.jpg",
        "price": 99,
        "discount": 50,
        "sizes": [
          "FREE"
        ],
        "noOfProducts": 99,
        "category": "kurtas",
        "gender": "female",
        "color": [
          "white",
          "gray",
          "violet",
          "brown"
        ],
        "materialDetails": "Best Quality",
        "review": [],
        "__v": 0,
        "brandName": "Puma"
      },{
        "_id": {
          "$oid": "63c794608c3acd2b146dff3a"
        },
        "name": "Kurta",
        "imageUrl": "https://m.media-amazon.com/images/I/51glqHA+jML._UX679_.jpg",
        "price": 10000,
        "discount": 60,
        "sizes": [
          "2XS",
          "3XL",
          "3XS",
          "L",
          "M",
          "S",
          "XL",
          "XS"
        ],
        "noOfProducts": 5,
        "category": "kurtas",
        "gender": "female",
        "color": [
          "black",
          "pink",
          "white",
          "violet",
          "brown"
        ],
        "materialDetails": "Best Quality",
        "review": [],
        "__v": 0,
        "brandName": "Adidas"
      }
]



let productsDetailsGroup = document.querySelector(".product-details-group")

let productInCart = cartProductArr
console.log("ProductInCart", productInCart)


function render(){
productInCart.map((element, index) => {
    // console.log("element", element.imageUrl , "index", index)
    // productInCart.push(element)
    productsDetailsGroup.innerHTML+=
    `
                        <div class="product-detail d-flex border p-3 mb-3 bg-white rounded  border-shadow">
                            <div class="porduct-img-div mr-3" >
                                <img class="product-img"  width="120px" src="${element.imageUrl}" alt="">
                               
                            </div>
                            <div>
                                <div class="product-name fs-6 font-weight-bold">${element.brandName}</div>
                                <div class="product-color fs-6 text-secondary">${element.materialDetails}</div>
                                <div class="product-manufacture fs-7 text-muted">${element.category}</div>
                                <div class="my-2 card-btn-group">
                                    <div class="dropdown display-inline-block ">
                                        <button class="product-quantity-dd btn btn-sm dropdown-toggle bg-white border-primary-color font-weight-bold mb-2" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Size
                                        </button>
                                        <div class="dropdown-menu border-primary-color" aria-labelledby="dropdownMenuButton">
                                          <a class="dropdown-item text-primary-color font-weight-bold " href="#">${element.sizes[0]}</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">${element.sizes[1]}</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">${element.sizes[2]}</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">${element.sizes[3]}</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">${element.sizes[4]}</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">${element.sizes[5]}</a>
                                        </div>
                                    </div>
                                    <div class="dropdown display-inline-block ">
                                        <button class="product-quantity-dd btn btn-sm dropdown-toggle bg-white border-primary-color font-weight-bold mb-2" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                         Qty:1
                                        </button>
                                        <div class="dropdown-menu border-primary-color  " aria-labelledby="dropdownMenuButton">
                                          <a class="dropdown-item text-primary-color font-weight-bold  "href="#">2</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">3</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">4</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">5</a>
                                          <a class="dropdown-item text-primary-color font-weight-bold" href="#">6</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="product-price-div fs-6 mb-2">
                                    <span class="font-weight-bold"> ₹ ${element.price} </span>
                                    <span class="mx-1 text-decoration-line-through text-secondary">₹ 4,499</span>
                                    <span class="highlight-color font-weight-bold">${element.discount}% OFF</span>
                                </div>
                                <div class="fs-6 mb-3"> 
                                    <span><img src="../images/exchange.png" width="20px" alt=""></span> 
                                    <strong>30 days</strong> return available 
                                </div>
                                <div class="card-btn-group " >
                                    <button type="button" class="product-delete-btn btn btn-sm btn-danger font-weight-bold mb-2" onclick="deleteProduct(${index})">Delete</button>
                                    <button type="button" class=" btn btn-sm text-secondary-color bg-white border-secondary-color rounded font-weight-bold mb-2">
                                    <i class="fa fa-heart-o " id="heart"></i>
                                    <span class="fs-7 font-weight-bold">WISHLIST</span></button>
                                </div>
                            </div>
                        </div>
    `
})
}

// Calculating cart total
let cartTotal = document.querySelector(".cart-total")
let prices = cartProductArr.map((product)=>product.price)
// console.log(prices)
let totalPrice= prices.reduce((acc,crr )=> acc + crr,0)
cartTotal.innerHTML = `₹ ${totalPrice.toLocaleString()}`  



render(productInCart) 