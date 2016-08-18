$(document).ready(function() {
  <!--Backend-->

  // var arabicBases = [1, 5, 10, 50, 100, 500, 1000];
  // var romanBases = ["I", "V", "X", "L", "C", "D", "M"];


  //Convert array of digits to roman numerals

  var arabicDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var a = ""
  var b = ""
  var c= ""
  var romanDigits = [a, a+a, a+a+a, a+b, b, b+a, b+a+a, b+a+a+a, b+c, c];
  var romanize = function(input) {
    //Convert input number into an array of digits
    var inputSplit = []
    inputSplit.push((parseInt(input.slice(0, 1))), (parseInt(input.slice(1 , 2))), (parseInt(input.slice(2, 3))), (parseInt(input.slice(3))));
    console.log(inputSplit);

    var outputArray = [];

    // for (var i = 0; i <= inputSplit.length;) {
    //   outputArray[i] = romanDigits[inputSplit[i]]
    // }
    // return outputArray;
  }

  // var romanize = function(input) {
  //   if (!input || input >= 4000) {
  //     return "Try again.";
  //   }  else {
  //     for (var i = 0; i <= arabicBases.length; i++){
  //       if (arabicBases[i] === input) {
  //         console.log(arabicBases.length);
  //         return romanBases[i];
  //       }
  //     }
  //   }

    // return
  // };
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


  // if(num >= 1000){
  //   for(var i = num; i >= 1000; i - 1000)
  //     $(output).append "M";
  // } else if (num >= 900) {
  //     $(output).append("CM")
  // } else if (num >= 500) {
  //     $(output).append("D")
  // } else if (num >= 400) {
  //     $(output).append("CD")
  // } else if (num >= 100) {
  //     $(output).append("C")
  // }
  // for(var i = num; i >= 100; i - 100)
  //   $(output).append "M";
  // if(num >= 100){
  //   for(var i = num; i >= 100; i - 100)
  //     $(output).append "C";
  // } else if (num >= 90) {
  //     $(output).append("XC")
  // } else if (num >= 50) {
  //     $(output).append("L")
  // } else if (num >= 40) {
  //     $(output).append("XL")
  // } else if (num >= 10) {
  //     $(output).append("X")
  // }
  // if(num >= 10){
  //   for(var i = num; i >= 10; i - 10)
  //     $(output).append "X";
  // } else if (num >= 900) {
  //     $(output).append("")
  // } else if (num >= 500) {
  //     $(output).append("D")
  // } else if (num >= 400) {
  //     $(output).append("CD")
  // } else if (num >= 100) {
  //     $(output).append("C")
  // }
