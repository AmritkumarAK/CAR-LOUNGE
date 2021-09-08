$(document).ready(function() {
   setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);

})
$(document).ready(function() {
   setTimeout(function(){
        $('body').addClass('loaded2');
    }, 1000);

})
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
