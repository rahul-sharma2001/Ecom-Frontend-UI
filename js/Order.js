// OrderList Object from which we will fetch the order data
let orderListObject = [
  {
    id: 1,
    name: "Firebolt Smart Watch",
    imageurl: "https://m.media-amazon.com/images/I/61MsnMwSK7L._SL1500_.jpg",
    price: `1800 Rs`,
    status: "Delivered",
    date: "17 Jan 2023",
  },
  {
    id: 2,
    name: "Firebolt Smart Watch",
    imageurl: "https://m.media-amazon.com/images/I/61MsnMwSK7L._SL1500_.jpg",
    price: `1800 Rs`,
    status: "Delivered",
    date: "17 Jan 2023",
  },
  {
    id: 3,
    name: "Firebolt Smart Watch",
    imageurl: "https://m.media-amazon.com/images/I/61MsnMwSK7L._SL1500_.jpg",
    price: `1800 Rs`,
    status: "Delivered",
    date: "17 Jan 2023",
  },
  {
    id: 4,
    name: "Firebolt Smart Watch",
    imageurl: "https://m.media-amazon.com/images/I/61MsnMwSK7L._SL1500_.jpg",
    price: `1800 Rs`,
    status: "Delivered",
    date: "17 Jan 2023",
  },
  {
    id: 5,
    name: "Firebolt Smart Watch",
    imageurl: "https://m.media-amazon.com/images/I/61MsnMwSK7L._SL1500_.jpg",
    price: `1800 Rs`,
    status: "Delivered",
    date: "17 Jan 2023",
  },
];

if (orderListObject.length === 0) {
  document.querySelector(".order-list-items").style.display = "none";
  document.querySelector(".no-order-container").classList.add("d-sm-flex");
  document.querySelector(".no-order-container").style.display = "flex";
} else {
  document.querySelector(".order-list-items").style.display = "block";
  document.querySelector(".no-order-container").style.display = "none";
}
function createOrderList() {
  let ol = document.getElementById("order-list-items");
  for (let i = 0; i < orderListObject.length; i++) {
    ol.innerHTML += `<div class='container-fluid' id='order-item' ><div class='row' id='olrow1'><div class='col-sm-4'><h6>Delivered on 17 Jan 2023</h6></div><div class='col-sm-8'><a href='#'class='invoice-link'>Invoice</a> 
    </div></div><div class='row' id='olrow2'><div class='col-sm-3'><div class='image-container'>  <img class='product-img' src='/images/watch.jpg' alt='SmartWatch'></div></div><div class='col-sm-5'><div class='product-info'><h6>Fire-Boltt Ninja Call Pro Plus Smart Watch</h6><button class='btn my-2 my-sm-0 view-item'>View Item</button><button class='btn my-2 my-sm-0 buy-again'>Buy It Again</button></div></div><div class='col-sm-4'><div class='order-product-details'><div class='detail-item'>ORDER_ID: 1</div><div class='detail-item'>Price:Rs 1800</div><div class='detail-item'>Status: Delivered</div><div class='detail-item'>Placed Order On: 15 Jan 2023</div></div></div></div></div>`;
  }
}
createOrderList();