

sessionStorage.setItem("isPaymentDone", false);

// ----------------------show payment methods-------------------------
sessionStorage.setItem("previousClickedPaymentMethodText", "cashOnDelivaryText");
sessionStorage.setItem("previousClickedPaymentMethodId", "cashOnDelivary");

function showPaymentMethods(textId, id) {
    // console.log(" id = ", id);

    let previousClickedPaymentMethodText = getSessionStorageDataByKey("previousClickedPaymentMethodText", undefined);
    let previousClickedPaymentMethodId = getSessionStorageDataByKey("previousClickedPaymentMethodId", undefined);

    console.log(" prev = ", previousClickedPaymentMethodId);
    console.log(" prevText = ", previousClickedPaymentMethodText);

    document.getElementById(textId).classList.add("payment-selected")
    document.getElementById(id).classList.remove("d-none");

    if (previousClickedPaymentMethodId != id) {
        document.getElementById(previousClickedPaymentMethodId).classList.add("d-none")
        document.getElementById(previousClickedPaymentMethodText).classList.remove("payment-selected");
    }

    sessionStorage.setItem("previousClickedPaymentMethodText", textId);
    sessionStorage.setItem("previousClickedPaymentMethodId", id);
}




// change address 
function changeAddress() {
    window.location.pathname = "/pages/addressPage.html"
}


// -----------------------------set selected address ---------------------------

function setSelectedAddress() {
    const selectedAddress = getLocalStorageDataByKey("selectedAddress", {})

    console.log("add = ", selectedAddress);

    const { name, pincode, address, locality } = selectedAddress;
    document.getElementById("deliveryAddress").innerHTML = `
            <div class="d-flex justify-content-between border rounded p-3 bg-white box-shadow">
                <div class="fs-8 text-secondary">
                    <div class="">Deliver to: ${name}, ${pincode}</div>
                    <div class=""> ${address + ", " + locality} </div>
                </div>

                <div class="fs-8 mt-1">
                    <button type="button" onclick="changeAddress()"
                        class="btn btn-outline-pink bg-pink fs-10 font-weight-bold text-drak-gray">CHANGE ADDRESS</button>
                </div>
            </div>
    `
}
setSelectedAddress()    


// $(document).ready( function () {

//     $(function () {
//         $('[data-toggle="tooltip"]').tooltip()
//     })

// })







function getLocalStorageDataByKey(key, defaultValue = undefined) {
    let data = localStorage.getItem(key);

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



// get data from the sessionStorage by key. if not exist then return default value which given by user otherwise undefined
function getSessionStorageDataByKey(key, defaultValue = undefined) {
    let data = sessionStorage.getItem(key);

    if (data) {
        try {
            data = JSON.parse(data)
            return data;
        } catch (error) {
            console.log("error = ", error);
            return data;
        }
    }
    else {
        return defaultValue;
    }
}