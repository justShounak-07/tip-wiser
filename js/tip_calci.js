
// let bill = Number(prompt('Enter Bill amount')); 
// let tip = Number(prompt('Enter Tip percentage(%)', 10));
// NaN= not a Number
// let tip_calci = (bill,tip) => (bill*(tip/100));
// console.log("Your Tip is:"+ tip_calci(bill,tip));

const billInput = document.querySelector(".bill");

const tipInput = document.querySelector(".tip_perc");


const output = document.querySelector(".result");

function calculateTip() {
    const billValue = Number(billInput.value); 
    const tipPercent = Number(tipInput.value); 
    const tipValue = billValue * (tipPercent/100);
    output.textContent = `Your tip is: ${tipValue.toFixed(2)}`;
      return tipValue;
}


const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // it will prevent page reload after clicking the submit button. 
    calculateTip();
} );

 billInput.addEventListener("input", calculateTip);
 tipInput.addEventListener("input",calculateTip)