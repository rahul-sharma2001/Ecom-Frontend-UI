var sliderMain = document.getElementById("wishlist__slideshow-container");
var item = sliderMain.getElementsByClassName("wishlist__mySlides");
function next(){
    sliderMain.append(item[0]);
}
function prev(){
    sliderMain.prepend(item[item.length-1]);
}

function delete_card(){
    var cardDelete =document.getElementsByClassName("card");
    cardDelete.remove();
}

// footer
function displayData(id) {
    document.getElementById(id).classList.toggle("display-none-for-responsive")
}
function handleToggle() {
    var menues = document.getElementsByClassName("topnav-menue")[0];
    menues.classList.toggle('topnav-menue1');
}





// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     // let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         console.log(i)
//         console.log(slideIndex)
//     }

//     for(let i = slideIndex - 1 ; i < slideIndex + 3 ; i++)
//         slides[i].style.display = "block"; 
//     console.log("slides"+slides.length);
//     // dots[slideIndex-1].className += " active";
// }
