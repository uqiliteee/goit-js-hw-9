import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayV= Number(delay.value);
  let stepV = Number(step.value);
  let amountV = Number(amount.value);

  for (let i = 0; i < amountV; i++) {
    let position = i + 1;
    console.log(position)
    let delayTgt = delayV + i * stepV
    console.log(delayTgt)
    createPromise(position, delayTgt)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }); 

  }

  event.currentTarget.reset();
};
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
    
  });
};
console.log(createPromise(1000, 1500));



