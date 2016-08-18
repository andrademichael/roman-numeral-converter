$(document).ready(function() {
  <!--Backend-->


  var romanize = function(input) {
    if (!input || input >= 4000) {
      return "Try again.";
    }  else if () {

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
