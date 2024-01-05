function menu() {
  let button = document.getElementById("button");
  let menu = document.getElementById("converter");

  button.style.display = "none";
  menu.style.display = "block";
}

function convert() {
  let initialCurrency = document.getElementById("initialCurrency").value;
  let targetCurrency = document.getElementById("targetCurrency").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let withdrawFunds = document.getElementById("withdrawFunds").checked;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (withdrawFunds) {
    amount -= amount * 0.01;
  }

  let exchangeRate = 812;
  let result = amount * exchangeRate;

  alert(
    `Converted ${amount} ${initialCurrency} a ${result.toFixed(
      2
    )} ${targetCurrency}`
  );

  let performAnotherOperation = confirm(
    "Do you wish to perform another operation?"
  );
  if (performAnotherOperation) {
    location.reload();
  }
}
