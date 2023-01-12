function handleToggle() {
    var menues = document.getElementsByClassName("topnav-menue")[0];
    menues.classList.toggle('topnav-menue1');
}

function displayData(id) {
    document.getElementById(id).classList.toggle("display-none")
}