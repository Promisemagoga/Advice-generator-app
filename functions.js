const resDiv = document.getElementById('results');
const resBtn = document.getElementById('getAdvice');

resBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            return response.json();
        })
        .then(adviceData => {
            const AdviceId = adviceData.slip.id;
            const Adviceobj = adviceData.slip.advice;
            resDiv.innerHTML = `<h4>ADVICE # ${AdviceId}</h4>`;
            resDiv.innerHTML += `<p>“ ${Adviceobj}”</p>`;
        })
        .catch(error => {
            console.log(error);
        });
}


// script.js
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        document.getElementById('dynamicImage').style.display = 'none'; // Hide the original image
        document.getElementById('dynamicImageSmall').style.display = 'block'; // Show the small image
    } else {
        document.getElementById('dynamicImage').style.display = 'block'; // Show the original image
        document.getElementById('dynamicImageSmall').style.display = 'none'; // Hide the small image
    }
});

