import { dBank } from "../../declarations/dBank";

window.addEventListener("load", async function () {
  await getBalance();
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

  if (!isNaN(outputAmount)) {
    await dBank.withdrawl(parseFloat(outputAmount));
  }

  await getBalance();
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})

async function getBalance() {
  await dBank.compound();
  const currentBalance = await dBank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentBalance * 100) / 100;
}