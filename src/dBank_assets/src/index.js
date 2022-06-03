import { dBank } from "../../declarations/dBank";

window.addEventListener("load", async function () {
  const currentBalance = await dBank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentBalance * 100) / 100;
})

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault()
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  const button = document.getElementById("submit-btn");
  button.setAttribute("disabled", true);

  if (!isNaN(inputAmount)) {
    await dBank.topUp(parseFloat(inputAmount));
  }


  const currentBalance = await dBank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentBalance * 100) / 100;
  document.getElementById("input-amount").value = "";
  button.removeAttribute("disabled");
})