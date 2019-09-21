console.log("hello");

var overlay = document.getElementById("moberlay");
var menu = document.getElementById("mobmenu");
var sidebar = document.getElementById("sidebar");

menu.addEventListener("click", function(){
  overlay.style.opacity = "0.5";
  overlay.style.zIndex = "999999"
  sidebar.style.left = "0px";
})
overlay.addEventListener("click", function(){
  setTimeout('overlay.style.zIndex = "-1";', 400)
  overlay.style.opacity = "0";
  sidebar.style.left = "-40%";
})
