// Mikey Antkiewicz : HW 3
// jQuery
$(document).ready(function(){
  // hide messages
  $("h2").hide();
  $("#button").click(function(){
    // hide interaction area
    $("p").hide();
    $("#table").hide();
    $("textarea").hide();
    $("button").hide();
    // show messages
    $("h2").fadeIn(2000);
  });
});