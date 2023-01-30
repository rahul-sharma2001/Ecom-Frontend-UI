

$(document).ready(()=>{


let slideContainer = document.getElementsByClassName("main-container__slide-container")[0]

let slideImgActive = document.querySelector(".zoom img")

let slideImg = document.querySelectorAll(".thumb img")
console.log(slideImg[0].getAttribute("src"));

let y = window.matchMedia("(max-width:920px)");

function myFunction(x) {
    if (x.matches) {
slideContainer.innerHTML=`<div class="main-container__carousel">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src=" ${slideImgActive.getAttribute("src")} " alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${slideImg[0].getAttribute("src")}" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${slideImg[1].getAttribute("src")}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${slideImg[2].getAttribute("src")}" alt="Second slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`
    } else {
      $(function() {
        $('.zoom').zoom();
        $('.thumb').on('click', 'a', function(e) {
          e.preventDefault();
          var thumb = $(e.delegateTarget);
          if (!thumb.hasClass('active')) {
            thumb.addClass('active').siblings().removeClass('active');
            $('.zoom')
              .zoom({
                url: this.href
              })
              .find('img').attr('src', this.href);
          }
        });
      });
      slideContainer.innerHTML = `<section class="product-page d-flex justify-content-center align-items-center">
      <div class="thumbnails">
        <div class="thumb active">
          <a href="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp">
            <img src="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp" alt="thumb-air-force-right-side" class="img-thumbnail">
          </a>
        </div>
        <div class="thumb">
        <a href="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp">
          <img src="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp" alt="thumb-air-force-left-side" id="imgForCarousel3" class="img-thumbnail">
        </a>
      </div>
        <div class="thumb">
          <a href="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp">
            <img src="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp" alt="thumb-air-force-bottom-side" class="img-thumbnail">
          </a>
        </div>
      </div>
      <div class="img-display">
        <span class="zoom">
          <img src="/ecom-pages/images/f15b7e55-894b-4f1e-b4e0-6f1151db60e11665656285865-US-Polo-Assn-Men-Off-White-Textile-LEBRON-30-Walking-Shoes-4-1.webp" alt="" style="height: 30.4rem;">
        </span>
      </div>
    </section>`
    }
  }
  myFunction(y);
  y.addEventListener("change", myFunction);
  

// let products = [
//   {
//     _id: {
//       $oid: "63c792f08c3acd2b146dff32",
//     },
//     name: "Kurta",
//     imageUrl: "https://m.media-amazon.com/images/I/51w7vLDofaL._UX679_.jpg",
//     price: 999,
//     discount: 10,
//     sizes: ["2XS", "3XS", "4XL", "M", "XL"],
//     noOfProducts: 100,
//     category: "kurtas",
//     gender: "female",
//     color: ["black", "red", "white", "gray"],
//     materialDetails: "Best Quality",
//     review: [],
//     __v: 0,
//     brandName: "Adidas",
//   },
//   {
//     _id: {
//       $oid: "63c7939e8c3acd2b146dff34",
//     },
//     name: "Kurta",
//     imageUrl:
//       "https://m.media-amazon.com/images/I/31hFpoY7fBL._SX342_SY445_.jpg",
//     price: 1500,
//     discount: 20,
//     sizes: ["2XL", "2XS", "L", "M", "S", "XL", "XS"],
//     noOfProducts: 50,
//     category: "kurtas",
//     gender: "female",
//     color: ["pink", "red", "white", "gray", "blue"],
//     materialDetails: "Best Quality",
//     review: [],
//     __v: 0,
//     brandName: "Puma",
//   },
//   {
//     _id: {
//       $oid: "63c793dd8c3acd2b146dff36",
//     },
//     name: "Kurta",
//     imageUrl: "https://m.media-amazon.com/images/I/51PD0BnTXjL._UX679_.jpg",
//     price: 100,
//     discount: 30,
//     sizes: ["3XL", "S", "XL", "XS"],
//     noOfProducts: 0,
//     category: "kurtas",
//     gender: "female",
//     color: ["pink", "red", "white", "gray", "violet"],
//     materialDetails: "Best Quality",
//     review: [],
//     __v: 0,
//     brandName: "Rebook",
//   },
//   {
//     _id: {
//       $oid: "63c7940c8c3acd2b146dff38",
//     },
//     name: "Kurta",
//     imageUrl:
//       "https://m.media-amazon.com/images/I/31lRTbzdsJL._SY445_SX342_.jpg",
//     price: 99,
//     discount: 50,
//     sizes: ["FREE"],
//     noOfProducts: 99,
//     category: "kurtas",
//     gender: "female",
//     color: ["white", "gray", "violet", "brown"],
//     materialDetails: "Best Quality",
//     review: [],
//     __v: 0,
//     brandName: "Puma",
//   }
// ];

// function sizeDiv(){
//   let sizeDiv = document.getElementsByClassName("sizeRound")[0];
//   for(i=0;i<products[0].sizes.length;i++){
//     sizeDiv.innerHTML+=`
//     <div
//     class="badge badge-pill d-flex justify-content-center align-items-center mr-2 font-weight-bold circleDiv">
//     ${products[0].sizes[i]}</div>
// <div`
//   }
// }sizeDiv()

// function priceAfterDiscount(){
//   let mrp = document.getElementById("mrpPrice");
//   let discount = document.getElementById("discountPrice");
//   let price = document.getElementById("priceOnly")
//   mrp.innerText = `mrp ${products[0].price}`;
//   discount.innerText=`(${products[0].discount}% off)`;
//   price.innerText=`₹${Math.floor(products[0].price - (products[0].price*products[0].discount/100))}`;
// }priceAfterDiscount()

// // function addTopDivImage() {
// //   let ImageDiv =
// //       document.getElementsByClassName("firstContainerFirstDiv")[0];
// //   for (i = 0; i < 4; i++) {
// //     ImageDiv.innerHTML =`                       
// //      <div class="col topImageDiv m-2">
// //     <img src="${products[0].imageUrl}" alt="" srcset="" height="100%"
// //         class="topProductImage">
// // </div>`
// //   }
// // }
// // addTopDivImage();

// // products[0].imageUrls

// let slideContainer = document.getElementsByClassName("slideContainer")[0]
// let firstImg = document.getElementById("imgForCarousel1")
// let secondImg = document.getElementById("imgForCarousel2")
// let thirdImg = document.getElementById("imgForCarousel3")
// let fourthImg = document.getElementById("imgForCarousel4")

// let col = document.querySelector(".firstContainerFirstDiv");
// //console.log(col);

// let slides = document.querySelectorAll(".topImageDiv");
// //console.log(slides)

// let y = window.matchMedia("(max-width:920px)");

// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const goNext = () => {
//   counter++;
//   slideImage();
// };

// const goPrev = () => {
//   counter--;
//   slideImage();
// };

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${(counter % 4) * 100}%)`;
//   });
// };

// function myFunction(x) {
//   if (x.matches) {
// 
//
//
//   } else {
//     
//   }
// }
// // onload = myFunction();
// // onresize = myFunction(); // Call listener function at run time
// myFunction(y);
// y.addEventListener("change", myFunction);

// footer
function displayData(id) {
  document.getElementById(id).classList.toggle("display-none-for-responsive");
}

//header
function handleToggle() {
  var menues = document.getElementsByClassName("topnav-menue")[0];
  menues.classList.toggle("topnav-menue1");
}


})
