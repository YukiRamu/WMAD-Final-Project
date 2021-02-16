/* Yuki Matsubara Morning Class Final Project: Online Travel Magazine  */
/* ====== Modal pop-up =====*/
var modalPopUp = document.getElementById("PopUp");
var submissionBtn = document.getElementById("subButton");
var cls  = document.getElementById("closeBtn");

var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var comments = document.getElementById("comments");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submissionBtn.onclick = function() {
   /* validation check */
  if ((fullName.value == "") || (email.value =="") || (comments.value =="")) {
    window.alert ("Please enter Name, Email Address, and Enquiries or Comments");
  } else if (email.value.match(mailformat)) {
    modalPopUp.style.display = "block";
    return false;
  } else{
    window.alert("You have entered an invalid email address");
    return false;
  }
}

cls.onclick = function() {
  modalPopUp.style.display = "none";
  location.href = "index.html"; // go back to home page
}

window.onclick = function(event) {
  if (event.target == modalPopUp) {
    modalPopUp.style.display = "none";
    location.href = "index.html"; // go back to home page
  }
}



