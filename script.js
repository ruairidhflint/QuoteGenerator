const complimentsArray = ["You're beautiful", "You are truly loved", "The thought of you makes somebody smile", "No matter your flaws, you are exactly how the universe intended, and that's beautiful", "Your smile lights up the room", "You have the ability to change one life, two lives, the whole world."];


const numberGenerator = Math.round(Math.random() * (quoteArray.length - 1));


function giveMeAQuote (){

  return quoteArray[numberGenerator];
}



let text = document.querySelector('.text-box');
let button = document.querySelector('button')


text.innerHTML = giveMeAQuote ();
button.addEventListener('click', refreshPage);


function refreshPage(){
    window.location.reload();
} 

