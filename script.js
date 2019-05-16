
const numberGenerator = Math.round(Math.random() * (quoteData.length - 1));


function giveMeAQuote (){
  return `${quoteData[numberGenerator].quote}`
}



let text = document.querySelector('.quote');
let name = document.querySelector('.author');

text.innerHTML = giveMeAQuote();
name.innerHTML = quoteData[numberGenerator].name;

let button = document.querySelector('.button');
// let button2 = document.querySelector('.wrapper1');

// button.addEventListener('click', () => window.location.reload());
button.addEventListener('click', () => window.location.reload());
button2. addEventListener('click', () => name.classList.toggle('hidden'))
