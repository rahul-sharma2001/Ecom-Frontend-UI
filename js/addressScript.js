// postal api = http://www.postalpincode.in/api/pincode/{pincode}


// --------------------------add new address popup---------------------------

sessionStorage.setItem("isAddressSelected", '' + false);

function closeWindow(id, childNodeId = undefined) {
    console.log("id = ", id, "childNode = ", childNodeId);

    const ele = document.getElementById(id);

    let toggle = ele.classList.toggle("display-none")

    const body = document.querySelector('body')
    // body.scrollTop = body.scrollHeight
    // ele.scrollTop = ele.scrollHeight = 0
    console.log(ele);

    // console.log("document = ", document.documentElement);


    // ---to make responsive in mobile view
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    if (toggle) {
        body.style.overflow = "visible"
    }
    else {
        body.style.overflow = "hidden"
    }

    // 760 is the height of the address window
    if (window.innerHeight < 760 && childNodeId) {
        document.getElementById(childNodeId).style.height = "100%"
    }
}


// to generate alert
function generateAlert(key, value) {
    if (!value) {
        alert(`Please enter ${key}`);
    }
    else {
        alert(`Please enter valid ${key}`);
    }
}

// fetch("http://localhost:3000/product/getAll")
// .then(res => res.json())
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log("err = ", err)
// })



// ---------------------- pincode ---------------------------------------

sessionStorage.setItem("isSuccessToGetDataFromPincode", false);
async function getCityAndStateByPincode(pincode) {
    await fetch(`http://www.postalpincode.in/api/pincode/${pincode}`)
        .then(data => data.json())
        .then(res => {
            console.log(res.Status);

            if (res.Status != "Error") {
                console.log(res.PostOffice[0].Taluk);
                console.log(res.PostOffice[0].State);

                // const city = document.getElementById('city');
                // const state = document.getElementById('state');

                // city.value = res.PostOffice[0].Taluk
                // state.value = res.PostOffice[0].State

                // console.log(city) //.remove('d-none')
                // state.classList.remove('d-none')

                cityStateManage(res.PostOffice[0].Taluk, res.PostOffice[0].State, true)

                sessionStorage.setItem("isSuccessToGetDataFromPincode", true);
                document.getElementById('city&State').classList.remove('d-none')
            }
            else {
                cityStateManage("", "", false)
                sessionStorage.setItem("isSuccessToGetDataFromPincode", false);
                generateAlert("pincode", pincode);
            }
        })
        .catch(err => {
            console.log("err = ", err);
        })
}

function cityStateManage(cityValue, stateValue, visible) {
    const city = document.getElementById('city');
    const state = document.getElementById('state');

    city.value = cityValue
    state.value = stateValue

    if (visible) {
        document.getElementById('city&State').classList.remove('d-none')
    }
    else {
        document.getElementById('city&State').classList.add('d-none')
    }
}


function pincodeChange(id) {
    console.log("pincode change = ", id);

    const pincode = document.getElementById(id).value;
    console.log("pincode = ", pincode);

    const rePincode = new RegExp("^[0-9]{6}$")

    if (rePincode.test(pincode)) {
        console.log("function call = ", getCityAndStateByPincode(pincode));
    }
    else {
        cityStateManage("", "", false)
        sessionStorage.setItem("isSuccessToGetDataFromPincode", false);
        generateAlert("pincode", pincode);
    }
}


// ---------------------------- remove address -------------------------------------
function removeAddress(id) {
    // console.log(id);

    const addressObjList = getLocalStorageDataByKey("deliveryAddressList", []);
    // console.log("before = ", addressObjList);

    for (const address of addressObjList) {
        if (address.id == id) {
            const index = addressObjList.indexOf(address);
            addressObjList.splice(index, 1);
            break;
        }
    }
    // console.log("after = ", addressObjList);

    localStorage.setItem("deliveryAddressList", JSON.stringify(addressObjList))
    loadAllAddress(addressObjList)
}


document.getElementById('addressForm').addEventListener('submit', event => {
    event.preventDefault();
    console.log("e = ", event);

    // destruct all properties
    const { name, phoneNo, pincode, address, locality, city, state, home, work, defaultAddress } = event.target.elements;

    const addressObj = {
        id: Date.now(),
        name: name.value,
        phoneNo: phoneNo.value,
        pincode: pincode.value,
        address: address.value,
        locality: locality.value,
        city: city.value,
        state: state.value,
        typeOfAddress: home.checked ? home.value : work.value,
        defaultAddress: defaultAddress.checked,
    }

    console.log("obj = ", addressObj);

    // ---------------------------validation-----------------------
    const reName = new RegExp("^[a-z A-Z]{3,}$")
    const rePhone = new RegExp("^[6-9]{1}[0-9]{9}$")
    const rePincode = new RegExp("^[0-9]{6}$")
    const reAddress = new RegExp("^[0-9a-zA-Z\\s,'-]{10,}$")
    const reLocalityCityState = new RegExp("^[a-zA-Z\\s,'-]+$")
    const isSuccessToGetDataFromPincode = getSessionStorageDataByKey("isSuccessToGetDataFromPincode");

    if (!reName.test(addressObj.name)) {
        console.log("Name");
        generateAlert("name", addressObj.name)
    }
    else if (!rePhone.test(addressObj.phoneNo)) {
        console.log("phone");
        generateAlert("phone number", addressObj.phoneNo)
    }
    else if (!rePincode.test(addressObj.pincode) && isSuccessToGetDataFromPincode) {
        console.log("pincode");
        cityStateManage("", "", false)
        sessionStorage.setItem("isSuccessToGetDataFromPincode", false);
        generateAlert("pincode", addressObj.pincode)
    }
    else if (!reAddress.test(addressObj.address)) {
        console.log("address");
        generateAlert("address", addressObj.address)
    }
    else if (!reLocalityCityState.test(addressObj.locality)) {
        console.log("locality");
        generateAlert("locality", addressObj.locality)
    }
    else if (!reLocalityCityState.test(addressObj.city)) {
        console.log("city");
        generateAlert("pincode", addressObj.pincode)
    }
    else if (!reLocalityCityState.test(addressObj.state)) {
        console.log("state");
        generateAlert("pincode", addressObj.pincode)
    }
    else {
        const addressObjList = getLocalStorageDataByKey("deliveryAddressList", []);
        console.log("form obj list = ", addressObjList);
        addressObjList.unshift(addressObj)

        if (addressObj.defaultAddress) {
            document.getElementById('addresses').innerHTML = "";
            addressObjList.forEach((obj, index) => {
                if (index != 0 && obj.defaultAddress) {
                    obj.defaultAddress = !obj.defaultAddress
                }

                loadAddress(obj)
            });
        }
        else {
            loadAddress(addressObj)
        }


        // submitted successfully
        localStorage.setItem("deliveryAddressList", JSON.stringify(addressObjList));
        sessionStorage.setItem("isSuccessToGetDataFromPincode", false);
        document.getElementById('city&State').classList.add('d-none')
        event.target.reset()
        closeWindow('addressWindow');
    }

})



// ---------------------------- load all address ------------------
function loadAllAddress() {

    const addressObjList = getLocalStorageDataByKey("deliveryAddressList", []);
    console.log(addressObjList);
    document.getElementById('addresses').innerHTML = "";

    addressObjList.forEach(obj => {
        loadAddress(obj)
    });
}
loadAllAddress()


// to load address based on form object
function loadAddress(addressObj) {
    document.getElementById('addresses').innerHTML += `
                <div class="col-lg-6 col-12">
                    <div class="card d-flex flex-row card-body my-2 box-shadow">
                        <div class="custom-control custom-radio mr-1">
                            <!-- name same for all radio buttons -->
                            <input type="radio" id="${addressObj.id}" name="addressSelect" onclick="addressSelected(id)"
                                class="custom-control-input" ${addressObj.defaultAddress ? "checked" : ""}>
                            <label class="custom-control-label" for="${addressObj.id}">
                                <div class="ml-1">
                                    <div class="d-flex flex-row">
                                        <div class="fs-7 font-weight-bold my-1 text-drak-gray">${addressObj.name}</div>
                                        
                                        <div
                                            class="fs-10 m-1 tag-outline-green border-radius-100 text-success px-2 mt-2">
                                            ${addressObj.typeOfAddress}
                                        </div>
        
                                        ${addressObj.defaultAddress
            ?
            '<div class="fs-10 m-1 tag-outline-green border-radius-100 text-success px-2 mt-2">Default</div>'
            :
            ""
        }
                                    </div>
                                    <div class="mt-2">
                                        <div class="fs-8 text-gray">
                                            ${addressObj.address}
                                        </div>
                                        <div class="fs-8 text-gray">${addressObj.city + ", " + addressObj.state} - <span>${addressObj.pincode}</span>
                                        </div>
                                        <div class="fs-8 text-gray mt-2">
                                            <span>Mobile:</span>
                                            <span class="font-weight-bold fs-7 text-drak-gray">${addressObj.phoneNo}</span>
                                        </div>
                                        <div class="mt-3 fs-7 text-gray">
                                            <span>•</span>
                                            Cash on Delivery available
                                        </div>
                                        <div class="mt-3">
                                            <button
                                                id="${addressObj.id}"
                                                onclick="removeAddress(id)"
                                                class="btn btn-outline-dark fs-8 font-weight-bold text-drak-gray">REMOVE</button>

                                            <button
                                                class="btn btn-outline-dark fs-8 mx-3 font-weight-bold text-drak-gray disabled">EDIT</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            `
            
}



// ------------------------ address selected ------------------------

function addressSelected(id) {
    console.log(" address selected = ", id);

    const addressObjList = getLocalStorageDataByKey("deliveryAddressList", []);

    for(let i = 0 ; i < addressObjList.length ; i++) {
        if(addressObjList[i].id == id) {
            console.log("selected address = ", addressObjList[i]);
            localStorage.setItem("selectedAddress", JSON.stringify(addressObjList[i]))
            break;
        }
    }

}





// Home and Work Label in Add Address Window
function labelChange(id, removeId) {
    document.getElementById(id).classList.add('label-selected')
    document.getElementById(removeId).classList.remove('label-selected')
}

// continue to payment page
function continueToPayment() {
    console.log("continue");

    // sessionStorage.setItem("isSignUp", true);
    sessionStorage.setItem("isOutOfCart", true);
    sessionStorage.setItem("isAddressSelected", true);

    window.location.pathname = "/pages/paymentPage.html";
}



















// get data from the localStorage by key. if not exist then return default value which given by user otherwise undefined
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
            return JSON.parse(data)
        } catch (error) {
            return data
        }
    }
    else {
        return defaultValue;
    }
}