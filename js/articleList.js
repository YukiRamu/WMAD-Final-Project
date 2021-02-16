/* Yuki Matsubara Morning Class Final Project: Online Travel Magazine  */
/* ====== image fade in =====*/
var panel = document.getElementsByClassName("panel");
var i = 0;
var timer = setInterval(imgFadeIn, 200);

function imgFadeIn () {
  panel[i].setAttribute("class", "panel showImg"); //add class="show" to div one by one
  i++;
  if (i === panel.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}



