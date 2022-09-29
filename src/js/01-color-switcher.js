const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');


let timerId = null;


startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);


function onStartBtn() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        startBtn.setAttribute('disabled', 'disabled');
    }, 1000);

    
}


function onStopBtn() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', 'disabled')
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}