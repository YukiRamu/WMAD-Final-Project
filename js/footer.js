/* Yuki Matsubara Morning Class Final Project: Online Travel Magazine  */
/* ===== Move to top button =====*/
$(document).ready (function (){
  $("#toTop").click(function (event){
    event.preventDefault(); //stop the link in a tag to be called
    $("html,body").animate({scrollTop:0}, "slow");
    return false;
  });
});