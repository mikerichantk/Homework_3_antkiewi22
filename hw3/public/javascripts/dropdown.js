// Mikey Antkiewicz : HW 3
$(".dropdown-content a").click(function() {
  var month = $(this).text();
  $('.dropbtn').text(month);
  return false;
});