function handleToggle() {
    var menues = document.getElementsByClassName("topnav-menue")[0];
    menues.classList.toggle('topnav-menue1');
}

function displayData(id) {
  if(window.screen.width < 991)
    document.getElementById(id).classList.toggle("footer-items-container")
}

window.onscroll = function() {handleCarouselPosition()};
function handleCarouselPosition(){
    if (document.documentElement.scrollTop > 350) {
        document.getElementById('offersCarousel')?.classList.add('offersCarousel')
      }
      else{
        document.getElementById('offersCarousel')?.classList.remove('offersCarousel')
      }
}
  


