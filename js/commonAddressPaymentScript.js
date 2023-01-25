

// -----------------------------header tags--------------------------

let isSignUp = getSessionStorageDataByKey("isSignUp", true)
let isOutOfCart = getSessionStorageDataByKey("isOutOfCart", true);
let isAddressSelected = getSessionStorageDataByKey("isAddressSelected", false)
let isPaymentDone = getSessionStorageDataByKey("isPaymentDone", false)

// console.log("add = ", typeof isAddressSelected);

function setHeaderTagIcons(isOutOfCart, isAddressSelected, isPaymentDone) {
    const cartTag = document.getElementById("header-cartTag")
    const addressTag = document.getElementById("header-addressTag")
    const paymentTag = document.getElementById("header-paymentTag")

    cartTag.innerHTML = `<img class="h-3vw mr-1 py-1" src="../images/${!isOutOfCart ? "edit-icon.svg" : "tick-icon.svg"}" alt="1" srcset="">
                            CART`
    addressTag.innerHTML = ` <img class="h-3vw mr-1 py-1" src="../images/${(!isOutOfCart && !isAddressSelected) ? "2.png" : (isOutOfCart && !isAddressSelected) ? "edit-icon.svg" : isOutOfCart ? "tick-icon.svg" : "2.png"}" alt="2" srcset="">
                            ADDRESS`
    paymentTag.innerHTML = ` <img class="h-3vw mr-1 py-1" src="../images/${(isOutOfCart && !isAddressSelected && !isPaymentDone) ? "3.png" : (isOutOfCart && isAddressSelected && !isPaymentDone) ? "edit-icon.svg" : (isOutOfCart && isAddressSelected) ? "tick-icon.svg" : "3.png"}" alt="3" srcset="">
                            PAYMENT`
}

setHeaderTagIcons(isOutOfCart, isAddressSelected, isPaymentDone)

// // get data from the sessionStorage by key. if not exist then return default value which given by user otherwise undefined
function getSessionStorageDataByKey(key, defaultValue = undefined) {
    let data = sessionStorage.getItem(key);

    if (data) {
        try {
            return JSON.parse(data)
        } catch (error) {
            return data
        }
    }
    else {
        return defaultValue;
    }
}


// ------------------ for footer ---------------
function displayData(id) {
    document.getElementById(id).classList.toggle("display-none-for-responsive")
}
