var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");

arrChoice = ["rock", "paper", "scissors"]

choiceOne.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer === "scissors")
     {alert ("Scissors, You WIN!")}
  else if (randomAnswer === "paper")
    {alert ("Paper, wow you suck at this!")}
    else
    {alert ("Rock, bust... try again")}
})

choiceTwo.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer == "rock")
     alert ("Rock, You WIN!")
  else if (randomAnswer == "scissors")
    alert ("Scissors, wow you suck at this!")
    else
    alert ("Paper, bust... try again")
})

choiceThree.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer == "paper")
    {alert ("Paper, You WIN!")}
  else if (randomAnswer == "rock")
    {alert ("Rock, wow you suck at this!")}
    else
    {alert ("Scissors, bust... try again")}
})




// 1> Intro "would you like to play"

// 2> click on a button 
// 3> button calls array random choice 
// 4> compare button choice to random Selection
// 5> return win or lose 
