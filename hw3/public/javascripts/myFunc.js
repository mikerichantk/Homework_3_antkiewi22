// Mikey Antkiewicz : HW 3
function myFunction() {
    // variable for thank you message
    var thanks = document.getElementById("ty");
    // variable for number of cakes
    var quant = document.getElementById("quantity");
    // variables to get value from text area
    var textarea = document.getElementById("text");
    var userInput = textarea.value;
    // variable to store key word
    var key = "vegan";
    // variable to see which topping checked
    var topping = document.querySelector('input[name="dot"]:checked');
    // check to see if vegan is in textarea
    if(userInput.match(key) != null){
      // the user input vegan
      alert("Error! Cheesecakes contain dairy!");
        $(document).ready(function(){
        // reload the original prompts
        $("h2").hide();
        $("p").show();
        $("table").show();
        $("textarea").show();
        $("button").show();
        });
    }
    else{
      // print variables in the h4 under the thank you message
      document.getElementById("inst").innerHTML ="\n" + quant.value + " " + topping.value + " cheesecakes with special instructions: " + userInput;
    }
}
