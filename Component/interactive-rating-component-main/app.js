const rates = document.querySelectorAll('.rate');
const rating = document.querySelector('.btn');
const rate = document.querySelector('.container__rate')
const success = document.querySelector('.container__success')
const successText = document.querySelector('.successText');

chooseRate(rates);

rating.addEventListener('click', function(){
    rate.style.display = 'none';
    success.setAttribute("class","container__success animate__animated animate__zoomIn");
    success.style.display = 'block';
})

function chooseRate(rate) {
    rate.forEach((element, index) => {
        element.addEventListener('click', function() {
            element.style.background = 'hsl(217, 12%, 63%)';
            element.style.color = 'hsl(0, 0%, 100%)';
            successText.innerHTML = `You selected ${index + 1} out of 5`
        });
    });
};