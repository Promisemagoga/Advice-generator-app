const qouteDiv = document.getElementById('results');
const generateQuoteBtn = document.getElementById('getAdvice');

generateQuoteBtn.addEventListener('click', getAdvice);

window.onload = () => {
    resizeWindow();
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
            qouteDiv.innerHTML = `<h4>ADVICE # ${AdviceId}</h4>`;
            qouteDiv.innerHTML += `<p>“ ${Adviceobj}”</p>`;
        })
        .catch(error => {
            console.log(error);
        });
}

window.addEventListener('resize', resizeWindow);

function resizeWindow() {
    if (window.innerWidth <= 767) {
        document.getElementById('ImageDividerBigScreen').style.display = 'none';
        document.getElementById('ImageDividerSmallScreen').style.display = 'block';
    } else {
        document.getElementById('ImageDividerBigScreen').style.display = 'block';
        document.getElementById('ImageDividerSmallScreen').style.display = 'none';
    }
}
