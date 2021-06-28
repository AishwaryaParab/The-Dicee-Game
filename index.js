var randomNumber1 = (Math.floor((Math.random())*6))+1;
var randomNumber2 = (Math.floor((Math.random())*6))+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

/*for the first dice*/
document.querySelector(".img1").setAttribute("src",randomImage1);

//for the second dice
document.querySelector(".img2").setAttribute("src",randomImage2);

/*Final Decision*/
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
