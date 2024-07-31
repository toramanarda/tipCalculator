//billInput, tipInput, tip-select button ,tip-amount

let billInput = document.querySelector('.billInput');
let tipSelectButtons = document.querySelectorAll('.tip-select button');
let tipAmount = document.querySelector('.tip-amount');
let tipInput = document.querySelector('.tipInput');
let totalAmount = document.querySelector('.total-amount');
let numberofInput = document.querySelector('.numberofInput');

function handleTipButton() {
  let bill = Number(billInput.value);
  let tip = Number(this.innerText);
  tipAmount.innerText = bill / 100 * tip
}

for(let i = 0; i < tipSelectButtons.length; i++) {
  let btn =  tipSelectButtons[i]
  btn.addEventListener('click',handleTipButton);
}

function handleTipInput() {
  let bill = Number(billInput.value);
  let tip = Number(this.value);
  tipAmount.innerText = bill / 100 * tip
}

tipInput.addEventListener('keyup',handleTipInput);

function handlePersonNumbers() {
  let bill = Number(billInput.value) + Number(tipAmount.innerText);
  let total = Number(numberofInput.value);
  totalAmount.innerText = bill / total
}
numberofInput.addEventListener('keyup', handlePersonNumbers);