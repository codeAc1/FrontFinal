window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("NavFixed")
  } else {
    navbar.classList.remove("NavFixed");
  }
}