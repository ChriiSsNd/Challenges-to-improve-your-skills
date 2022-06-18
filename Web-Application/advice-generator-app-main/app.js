const URL_API = "https://api.adviceslip.com/advice";

const idAdvice = document.querySelector('.title');
const advice = document.querySelector('.content');
const btnDice = document.querySelector('.dice-box');

fetch(URL_API)
    .then(response => response.json())
    .then(advice => showAdvice(advice));

changeAdvice();

function showAdvice(obj) {
    idAdvice.textContent = `ADVICE #${obj.slip.id}`;
    advice.textContent = obj.slip.advice;
}

function changeAdvice() {
    btnDice.addEventListener('click', function() {
        window.location.reload();
    });
}

