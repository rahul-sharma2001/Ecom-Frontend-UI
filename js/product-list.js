function displayData(id) {
    document.getElementById(id).classList.toggle("display-none-for-responsive")
}
function handleToggle() {
    var menues = document.getElementsByClassName("topnav-menue")[0];
    menues.classList.toggle('topnav-menue1');
}

const rangeInput = document.querySelectorAll('.rangeInput input');
const priceInput = document.querySelectorAll('.priceInput input');
const progress = document.querySelector('.slider .sliderbar');
let cardDiv = document.getElementsByClassName('cardDiv');
let cards = document.getElementsByClassName('card');
let listType = document.getElementsByTagName('img');
let sidebar = document.getElementsByClassName('sidebar')[0];
let gridBoxs = document.getElementsByClassName('box');
let BoxOf4 = document.getElementsByClassName('boxOf4')[0];
let listBox = document.getElementsByClassName('listBox')[0];
let ListView = document.getElementsByClassName('listView')[0];
let shortOption = document.getElementsByClassName('shortOption');
let priceGap = 10000;

//set display of sidebar to none when we refresh the page
sidebar.classList.remove('viewSidebar');

//change slidbar base on input value 
priceInput.forEach((input) => {
    input.addEventListener('input', e => {

        let minVal = parseInt(priceInput[0].value);
        let maxVal = parseInt(priceInput[1].value);

        if ((maxVal - minVal >= priceGap) && maxVal <= 100000) {
            if (e.target.className === "inputMin") {
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

//change input price based on the slidebar
rangeInput.forEach((input) => {
    input.addEventListener('input', e => {

        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className == "rangeMin") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

//when grid option is one column per row
function listView() {

    Array.from(cardDiv).forEach((cardDiv) => {
        cardDiv.classList.remove(...cardDiv.classList);
        cardDiv.classList.add('cardDiv', 'inListView', 'col-12', 'p-3');
    });
    Array.from(cards).forEach((card) => {
        card.classList.remove(...card.classList)
        card.classList.add('card', 'd-flex', 'flex-row', 'justify-content-around', 'align-items-center', 'cardWidthInListView');
    })
    Array.from(listType).forEach((listItem) => {
        listItem.classList.add('listViewUpdate','m-3');
    })
};

// when grid optin is 4 column per row
function boxOf4() {
    let displayValueOfFilter = sidebar.classList.contains('viewSidebar');
    // check the display value of filter if sidebar is block set col-12 otherwise col-6
    if (displayValueOfFilter) {
        Array.from(cardDiv).forEach((cardDiv) => {
            cardDiv.classList.remove(...cardDiv.classList);
            cardDiv.classList.add('cardDiv', 'col-xl-3', 'col-lg-4', 'col-md-6', 'col-12', 'p-3');

        })
    } else {
        Array.from(cardDiv).forEach((cardDiv) => {
            cardDiv.classList.remove(...cardDiv.classList);
            cardDiv.classList.add('cardDiv', 'col-xl-3', 'col-lg-4', 'col-md-6', 'col-6', 'p-3');
        })
    }
    Array.from(cards).forEach((card) => {
        card.classList.remove(...card.classList)
        card.classList.add('card', 'p-2');
    })
    Array.from(listType).forEach((listItem) => {
        listItem.classList.remove('listViewUpdate','m-3');
    })
};

//show filters when click on filter button
function showFilters() {
    sidebar.classList.toggle('viewSidebar');
    sidebar.classList.toggle('m-4');
    sidebar.classList.toggle('ml-0');
};

//for active grid option
function activeGridOption() {
    let card1 = document.getElementById(productList[0]._id.$oid);
    let isInListView = card1.classList.contains('inListView');
    if (isInListView) {
        listBox.classList.add('activeBox');
        ListView.classList.add('activeGridoptions');
        Array.from(gridBoxs).forEach((box) => {
            box.classList.remove('activeBox');
        })
        BoxOf4.classList.remove('activeGridoptions');
    } else {
        listBox.classList.remove('activeBox');
        ListView.classList.remove('activeGridoptions');
        Array.from(gridBoxs).forEach((box) => {
            box.classList.add('activeBox');
        })
        BoxOf4.classList.add('activeGridoptions');
    }
};

// function for active short option
function activeSortOption(element) {
    Array.from(shortOption).forEach((option) => {
        option.classList.remove('activeShortOption');
    });
    element.classList.add('activeShortOption');
    sortBy();
};

let productList;
fetch('/products.json').then((u) => {
    return u.json();
}).then((json) => {
    productList = json;
    renderProducts(productList);
    activeGridOption();
}
);

//print products on pages
function renderProducts(productList) {
    let HTML = '';
    let productDiv = document.getElementById('productDiv');
        productList.map((product) => {

            //let discountPrice = product.price - ((product.price*product.discount)/100);
            HTML += `<div class="cardDiv col-xl-3 col-lg-4 col-md-6 col-6 p-3 d-flex justify-content-center align-items-center" id='${product._id.$oid}'>
                 <div class="card p-2">
                     <img class="card-img-top products-image"
                         src="${product.imageUrl}" alt="Card image cap">
                     <div class="productInfo ml-1">
                     <div  class="heartBrandname d-flex justify-content-between mt-2">
                         <h5 class="brandName">${product.brandName}</h5>
                         <i class="fa fa-heart-o" id='heart'></i>
                         </div>
                         <div class="cardDetails d-flex " style="height:1.3rem">
                             <div class="gender">${product.gender}</div>
                             <div class="type ml-2">${product.category}</div>
                         </div>
                         <div class="productPrice"><b>Rs.${product.price}</b>
                             <div class="discount text-success">(${product.discount}%OFF)</div>
                         </div>
                         <div class="alertSection"></div>
                     </div>
                 </div>
             </div>`
        });
        productDiv.innerHTML = HTML;
        let inList = document.getElementsByClassName('listView')[0].classList.contains('activeGridoptions');
         if(inList){
            listView() ;
         }
    
    
}

//function for getiing products that are displayed on the search
function getObjectList() {
    let objList = [];
    Array.from(cardDiv).forEach((cardDiv) => {
        Array.from(productList).forEach((product) => {
            if(product._id.$oid == cardDiv.id){
                objList.push(product);
            };
        });
    });
    return objList;
}

//filter products based on gender
function filterOnGender(option) {
    let filterData;
    if (option !== 'all') {
        filterData = Array.from(productList).filter((product) => {
            return product.gender == option;
        })
    } else {
        filterData = productList;
    }
    renderProducts(filterData);
}

//filter products on Discounts
function filterOnDiscount(discountRate) {
    filterData = Array.from(productList).filter((product) => {
        return product.discount >= discountRate;
    });
    renderProducts(filterData);
}

//sort product base on short option
function sortBy() {
    let objList = getObjectList();
    let sortData;
    let sortOption = document.getElementsByClassName('shortOption');
    Array.from(sortOption).forEach((option) => {
        if (option.classList.contains('activeShortOption')) {
            if (option.id == 'popularity') {

            } else if (option.id == 'lowToHigh') {
                sortData = Array.from(objList).sort((a, b) => {
                    return a.price - b.price;
                });
                renderProducts(sortData);
            } else if (option.id == 'highToLow') {
                sortData = Array.from(objList).sort((a, b) => {
                    return b.price - a.price;
                });
                renderProducts(sortData);
            } else if (option.id == 'whatsNew') {
                sortData = Array.from(objList).sort((a, b) => {
                    console.log('hii')
                    console.log(b._id.$oid - a._id.$oid)
                    //if()
                    //return b._id.$oid - a._id.$oid;
                });
                //renderProducts(sortData);
            }
        };
    })
}