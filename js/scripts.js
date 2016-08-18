$(document).ready(function() {
  <!--Backend-->

  var arabicBases = [1, 5, 10, 50, 100, 500, 1000]
  var romanBases = ["I", "V", "X", "L", "C", "D", "M"]
  var romanize = function(input) {
    if (!input || input >= 4000) {
      return "Try again.";
    }  else {
      for (var i = 0; i <= arabicBases.length; i++){
        if (arabicBases[i] === input) {
          console.log(arabicBases.length);
          return romanBases[i];
        }
      }
    }

    return
  };
  <!--Frontend-->
  $("#converter").submit(function(event) {
    event.preventDefault();
    $("#result").text("");
    var input = parseInt($("#numInput").val());
    console.log(input);
    var output = romanize(input);
    $("#result").text(output);
  });
});
