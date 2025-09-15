// alert("hello coder");
// $("h1");



var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started=false;
var level=0;


//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
    if (!started) {
  
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


  $(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  
  //   console.log(userClickedPattern);
  
  });
  
//   function checkAnswer(currentLeve){
//   };

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}



function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomnumber=Math.floor(Math.random()*4);
    // console.log(randomnumber)
var randomChosenColour=buttonColours[randomnumber];
gamePattern.push(randomChosenColour);
console.log(gamePattern);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playsound(randomChosenColour);

};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
   setTimeout(function (){
    $("#"+currentColour).removeClass("pressed")},100);
   };

function playsound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();   
};


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }