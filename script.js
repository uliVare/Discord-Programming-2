let userBalance = 2000;
let converter = document.getElementById("button");
const exchangeRates = {
  CLP: 0.88,
  ARS: 1,
  USD: 814,
  EUR: 889,
  TRY: 27,
  GBP: 1033,
};

converter.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Accediendo");
  showMenu();
});

function showMenu() {
  document.getElementById("button").style.display = "none";
  document.getElementById("converter").style.display = "block";
}

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  let initialCurrency = document.getElementById("initialCurrency").value;
  let targetCurrency = document.getElementById("targetCurrency").value;
  let resultElement = document.getElementById("result");

  if (isNaN(amount)) {
    resultElement.innerHTML = "Ingrese un monto valido.";
    return;
  }

  if (!exchangeRates[initialCurrency] || !exchangeRates[targetCurrency]) {
    resultElement.innerHTML = "Las monedas seleccionadas no son validas.";
    return;
  }

  let result =
    (amount * exchangeRates[initialCurrency]) / exchangeRates[targetCurrency];
  resultElement.innerHTML = `${amount} ${initialCurrency} es igual a ${result.toFixed(
    2
  )} ${targetCurrency}.`;

  setTimeout(() => {
    const withdrawOption = confirm("Desea retirar sus fondos?");
    if (withdrawOption) {
      withdrawFunds(result);
    } else {
      resultElement.innerHTML +=
        "<br>No se han retirado fondos. Volviendo al menu principal";
      location.reload();
    }
  }, 500);
}

function withdrawFunds(withdrawalAmount) {
  const resultElement = document.getElementById("result");
  const commission = withdrawalAmount * 0.01;
  withdrawalAmount -= commission;
  userBalance -= withdrawalAmount;
  resultElement.innerHTML = `Se han retirado fondos por un monto de ${withdrawalAmount.toFixed(
    2
  )} (1% de comisión).`;
}
