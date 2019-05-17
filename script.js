let text = document.querySelector('.quote');
let name = document.querySelector('.author');
let button = document.querySelector('.button');

button.addEventListener('click', quoteGenerator );

function quoteGenerator(){
  const numberGenerator = Math.round(Math.random() * (quoteData.length - 1));
  text.innerHTML = quoteData[numberGenerator].quote
  name.innerHTML = quoteData[numberGenerator].name;
}

