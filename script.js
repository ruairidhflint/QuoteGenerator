
const numberGenerator = Math.round(Math.random() * (quoteData.length - 1));


function giveMeAQuote (){
  return `${quoteData[numberGenerator].quote} <br> - <br> ${quoteData[numberGenerator].name}`
}



let text = document.querySelector('.text-box');

text.innerHTML = giveMeAQuote ();


let button = document.querySelector('button')

button.addEventListener('click', () => window.location.reload());


