//Create a random number.
var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var randomNumber2 = 1 + Math.floor(Math.random() * 6);

//Change the <img> to a random dice.
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

// Display a winner.
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}