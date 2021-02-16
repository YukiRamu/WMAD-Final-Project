/* Yuki Matsubara Morning Class Final Project: Online Travel Magazine  */
/* ===== text fade-in =====*/
var text = document.querySelector("h1"); //get h1 element
var strText =  text.textContent; //convert to text
var splitTextArr = strText.split(""); //split and push them in to Array: 33 index
text.textContent =""; //make h1 empty

for (var i=0; i < splitTextArr.length; i++) { //add values to h1 and change to span
  text.innerHTML = text.innerHTML + "<span>" + splitTextArr[i] + "</span>";
}

var count =0;
var timer = setInterval(windowOpen, 30);

function windowOpen () {
    var span = text.querySelectorAll("span")[count]; // up to index 33
    span.classList.add("fade"); //add class to all span tags one by one
    count++;
    if (count === splitTextArr.length) {
      complete();
      return;
    }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
/* ===== text/link fade-in =====*/
var button = document.getElementById("clickBtn");

function fadeIn (){
  window.addEventListener("load", () => {
    button.setAttribute("class", "show");
  })
}
fadeIn();
/* ===== select options check / URL set=====*/
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clickBtn").addEventListener("click" , event => {
    /* validation check */
    var destination = document.getElementById("destination");
    var theme = document.getElementById("theme");

    if ((destination.value == "") || (theme.value == "")) {
      window.alert("Please select both your destination and theme.");
      return false;
    }else {
      /* URL set */
      var urlEurope = "./explore1.html"; //url for Europe page
      var urlUsCanada = "./explore2.html"; //url for US Canada page

      var selected = [...document.querySelectorAll("select")].filter(option => {
        return option.value!=="";
      }).map(option =>{
        return encodeURIComponent(option.name)+"="+encodeURIComponent(option.value);
      }).join("&");
      if(selected.length>0) selected="?"+selected;

      /* webpage based on destination theme*/
      if (destination.value == "Europe") {
        textContent = urlEurope + selected;
      }else if (destination.value == "US & Canada") {
        textContent = urlUsCanada + selected;
      }else {
        window.alert("Sorry. The webpage is currently under development");
        return false;
      }
      window.open (textContent); //open window with combined URL
      /* pass theme value */
      localStorage.setItem("themeValue", theme.value);
      return false;
    };
  });
});