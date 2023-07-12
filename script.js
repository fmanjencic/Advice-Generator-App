const adviceHeader = document.getElementsByClassName('header-p');
const diceButton = document.getElementById('dice-btn')
const mainQuote = document.getElementsByClassName('quote-p');



async function getQuote() {
    const url = `https://api.adviceslip.com/advice`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            mainQuote[0] . textContent = `"${data.slip.advice}"`;
            adviceHeader[0].textContent = `ADVICE #${data.slip.id}`;
        })
}

diceButton.addEventListener('click', getQuote);

//On Load
getQuote();