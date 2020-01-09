// User Input

var p1=prompt("Player1 Name: ");
var p2=prompt("Player2 Name: ");

document.getElementsByClassName("player")[0].textContent=p1;
document.getElementsByClassName("player")[1].textContent=p2;

function dice()
{
// First Dice..

var RandomNumber1= Math.floor(Math.random() * 6) + 1;

var diceImage1= "images/dice" + RandomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImage1);

// Second Dice..

var RandomNumber2= Math.floor(Math.random()*6)+1;

var diceImage2= "images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

if(RandomNumber1 > RandomNumber2)
{
    document.getElementsByClassName("intro")[0].textContent= p1 +" Wins!!";
}
else if(RandomNumber2 > RandomNumber1)
{
    document.getElementsByClassName("intro")[0].textContent= p2+ " Wins!!";
}
else
{
    document.getElementsByClassName("intro")[0].textContent="Draw";
}
}

document.getElementsByTagName("button")[0].addEventListener("click",dice);