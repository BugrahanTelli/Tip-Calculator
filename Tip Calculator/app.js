const amountInput = document.querySelector("#amount")
const tipInput = document.querySelector("#tip")
const tipPercentage = document.querySelector(".percentage")
const tipAmount = document.querySelector(".onlytip")
const total = document.querySelector(".bwtip")

function calculate() {
    const amount = parseFloat(amountInput.value); 
    const tip = parseInt(tipInput.value);
    const tipp = (amount * tip) / 100;


    tipAmount.value = tipp.toFixed(2);
    total.value = (amount + tipp).toFixed(2);
    tipPercentage.innerText = tip + "%";
}


amountInput.addEventListener("input", calculate);
tipInput.addEventListener("input", calculate);
