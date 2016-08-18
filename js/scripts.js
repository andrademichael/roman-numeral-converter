$(document).ready(function() {
  <!--Backend-->

  // var arabicBases = [1, 5, 10, 50, 100, 500, 1000];
  // var romanBases = ["I", "V", "X", "L", "C", "D", "M"];


  //Convert array of digits to roman numerals

  var arabicDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  var romanize = function(input) {
    var ones = ["I", "V", "X"];
    var tens = ["X", "L", "C"];
    var hundreds = ["C", "D", "M"];
    var thousands = ["M", "", ""];
    var places = [thousands, hundreds, tens, ones];
    var a = places[i[0]];
    var b = places[i[0]];
    var c = places[i[0]];
    var romanDigits = ["", a, (a + a), (a + a + a), (a + b), (b), (b + a), (b + a + a), (b + a + a + a), (b + c), (c)];
    var output = [];

    if (inputSplit[0] > 0){
      var a =
    } else if (inputSplit[1] > 0){
      var a = hundreds

    }

    //error catching
    if (!input || input >= 4000) {
      return "Try again.";
    }  else {
    //Convert input number into an array of digits
      var inputSplit = [];
      inputSplit.push((parseInt(input.slice(0, 1))), (parseInt(input.slice(1 , 2))), (parseInt(input.slice(2, 3))), (parseInt(input.slice(3))));
      console.log(inputSplit);

      var output = "";
      for (var i = 0; i < inputSplit.length; i++) {
        if (!inputSplit[i]) {
          inputSplit[i]="";
        }
        outputString = (romanDigits[inputSplit[i]]);
        console.log(i);
        console.log(outputString);
      };
      console.log(outputString);
      return outputString;
    }
  // var romanize = function(input) {
  //     for (var i = 0; i <= arabicBases.length; i++){
  //       if (arabicBases[i] === input) {
  //         console.log(arabicBases.length);
  //         return romanBases[i];
  //       }
  //     }
  //   }

    // return
  };
  <!--Frontend-->
  $("#converter").submit(function(event) {
    event.preventDefault();
    $("#result").text("");
    var input = $("#numInput").val();
    console.log(input);
    var output = romanize(input);
    $("#result").text(output);
  });
});
