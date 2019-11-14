// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
  $("#userChoice").empty();
    let usermove = $("#input").val();
    $("#userChoice").append(usermove);
    console.log(usermove);
    let cpmove = Math.floor((Math.random())*3)
    console.log(cpmove)
    if (cpmove === 0) {
        $("#computerChoice").html("Rock");
    }
    else if (cpmove === 1) {
        $("#computerChoice").html("Paper");
    }
    else if (cpmove === 2) {
        $("#computerChoice").html("Scissor");
    }

  if (usermove === "Rock" && cpmove === 0) {
    $("#result").html("Tie!");
  }
  else if (usermove === "Rock" && cpmove === 1) {
    $("#result").html("Lose!");
  }
  if (usermove === "Rock" && cpmove === 2) {
    $("#result").html("Win!");
  }
  
  if (usermove === "Paper" && cpmove === 0) {
    $("#result").html("Win!");
  }
  else if (usermove === "Paper" && cpmove === 1) {
    $("#result").html("Tie!");
  }
  if (usermove === "Paper" && cpmove === 2) {
    $("#result").html("Lose!");
  }

  if (usermove === "Scissor" && cpmove === 0) {
    $("#result").html("Lose!");
  }
  else if (usermove === "Scissor" && cpmove === 1) {
    $("#result").html("Win!");
  }
  else if (usermove === "Scissor" && cpmove === 2) {
    $("#result").html("Tie!");
  } else  {

    console.log('else', userMove, cpmove);
  $("#result").html("Invalid Input..");
  }
  $('input').val('');
});


// DOCUMENT READY FUNCTION BELOW