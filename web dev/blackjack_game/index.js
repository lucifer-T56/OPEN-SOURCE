let cards = [];  //Array  //js array can have diff types of datatype together
let sum = 0;
let isAlive = false, hasBlackjack = false;
let message = "";
//let sumEL = document.getElementById("sum-EL");
let sumEL = document.querySelector("#sum-EL"); //css selectors. for id # and for class .
let cardsEL = document.getElementById("cards-EL");

let player = {  //JS object . can have diff types of datatype together
    name:"Sneha",  //name=>key , Sneha=>value. 
    chips: 145
}
let playerel = document.getElementById("player-EL");
playerel.textContent = player.name + ": $" + player.chips;  //Accessing values, object.key =>value
function getRandomNum()
{
       //Math.random => 0.00000 - 0.999999
       let randomNum = Math.floor(Math.random() * 12 + 1);  //Math.floor => 5.053930 =>5
    if(randomNum === 1)
        return 11;
    else if(randomNum > 10)
        return 10;
    return randomNum;
}
function startGame()
{
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
     sum = firstCard + secondCard;
    cards = [firstCard , secondCard];
    renderGame();
}
function renderGame(){
    sumEL.innerHTML = "Sum: " + sum;
    cardsEL.innerHTML = "Cards: ";

    for( let i = 0; i < cards.length;  i++ )
        cardsEL.innerHTML += " " + cards[i] ;

    if(sum < 21)
        message = "Do you want to draw a new card?";
    else if(sum === 21)
    {
        // sum == "21" or sum == 21 both will work so for make it more strict we use ===
        message = "Wohoo! You've got BLACKJACK!";
        hasBlackjack = true;
    }
    else
    {
        message = "You're out of the game.";
        isAlive = false;
    }
    document.getElementById("message-EL").innerText = message;
}

function newCard()
{
    if(isAlive && !hasBlackjack)
    {
        let card = getRandomNum();
        sum += card;
        cards.push(card);
        renderGame();
    }

}
