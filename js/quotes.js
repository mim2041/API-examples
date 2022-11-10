
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerText = quote.quote;
}
// loadQuote();

const loadQuote2 = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote2(data))
}

const displayQuote2 = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}