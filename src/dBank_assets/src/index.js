import { dBank } from "../../declarations/dBank";

window.addEventListener("load", async function () {
  const currentBalance = await dBank.checkBalance();
  this.document.getElementById("value").innerText = Math.floor(currentBalance * 100) / 100;
})