console.log("hello");

var overlay = document.getElementById("moberlay");
var menu = document.getElementById("mobmenu");
var sidebar = document.getElementById("sidebar");
var logo = document.getElementById("logo");

// function unfade(element) {
//   var op = 0.01;  // initial opacity
//   element.style.display = 'block';
//   var timer = setInterval(function () {
//       if (op >= 1){
//           clearInterval(timer);
//       }
//       element.style.opacity = op;
//       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//       op += op * 0.1;
//   }, 20);
// }

function unfade(element) {
  element.style.opacity = '1';
}

unfade(logo);

menu.addEventListener("click", function(){
  overlay.style.opacity = "0.5";
  overlay.style.zIndex = "999999"
  sidebar.style.left = "0px";
})
overlay.addEventListener("click", function(){
  setTimeout('overlay.style.zIndex = "-1";', 400)
  overlay.style.opacity = "0";
  sidebar.style.left = "-70%";
})
