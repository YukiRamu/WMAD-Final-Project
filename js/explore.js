/* Yuki Matsubara Morning Class Final Project: Online Travel Magazine  */
/* ====== Insert Title ======*/
document.getElementById("theme").innerHTML = localStorage.getItem("themeValue");
/* ====== image slides in ======*/
var slideConts = document.querySelectorAll(".slideConts");
var slideContsRect = []; //array to set the rectangular coordinates of the elements
var slideContsTop = []; //array to set the ordinate of the elements
var windowY = window.pageYOffset; //get the scroll position of window
var windowH = window.innerHeight; //get the window height
var remainder = 300; //secure the space when showing the image

//to locate the coordinates 
for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect()); //get rect coordinate
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// to check if the window is resized
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
window.addEventListener('scroll', function () {
  windowY = window.pageYOffset; //locate the scroll position
  
  for (var i = 0; i < slideConts.length; i++) {
    if(windowY > slideContsTop[i] - windowH + remainder) {
      slideConts[i].classList.add('show');
    } else {
     // slideConts[i].classList.remove('show');
    }
  }
});
/* ====== Modal pop-up =====*/
var emailInput = document.getElementById("emailInput");
var modalPopUp = document.getElementById("PopUp");
var submissionBtn = document.getElementById("subButton");
var cls  = document.getElementById("closeBtn");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submissionBtn.onclick = function() {
  /* email validation check */
  if (emailInput.value =="") {
    window.alert("Please enter your email address");
    return false;
  } else if (emailInput.value.match(mailformat)) {
    modalPopUp.style.display = "block";
    return false;
  } else{
    window.alert("You have entered an invalid email address");
    emailInput.value=""; //clear input
    return false;
  }
}

cls.onclick = function() {
  modalPopUp.style.display = "none";
  emailInput.value=""; //clear input
}

window.onclick = function(event) {
  if (event.target == modalPopUp) {
    modalPopUp.style.display = "none";
    emailInput.value=""; //clear input
  }
}