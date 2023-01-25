function handleToggle() {
    var menues = document.getElementsByClassName("topnav-menue")[0];
    menues.classList.toggle('topnav-menue1');
}

function displayData(id) {
    document.getElementById(id).classList.toggle("display-none-for-responsive")
}

window.onscroll = function() {handleCarouselPosition()};
function handleCarouselPosition(){
    if (document.documentElement.scrollTop > 350) {
        document.getElementById('offersCarousel').classList.add('offersCarousel')
      }
      else{
        document.getElementById('offersCarousel').classList.remove('offersCarousel')
      }
}





















// $(function () {
//     $("#carousel-multiple").on("slide.bs.carousel", function (e) {
//       var itemsPerSlide = parseInt($(this).attr("data-maximum-items-per-slide")),
//         totalItems = $(".carousel-item", this).length,
//         reserve = 1, //do not change
//         $itemsContainer = $(".carousel-inner", this),
//         it = itemsPerSlide + reserve - (totalItems - e.to);
  
//       if (it > 0) {
//         for (var i = 0; i < it; i++) {
//           $(".carousel-item", this)
//             .eq(e.direction == "left" ? i : 0)
//             // append slides to the end/beginning
//             .appendTo($itemsContainer);
//         }
//       }
//     });
//   });
  


