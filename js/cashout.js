document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const convertWithdraw = parseFloat(withdrawAmount);

    const mainBalance = document.getElementById("balance").innerText;
    const convertBalance = parseFloat(mainBalance);

    console.log(convertBalance);
    const pin = document.getElementById("cashout-pin").value;
    const pinConvert = parseInt(pin);
    console.log(pinConvert);

    if (convertWithdraw <= convertBalance && convertWithdraw > 0) {
      if (pinConvert === 1234) {
        const newBalance = convertBalance - convertWithdraw;
          document.getElementById("balance").innerText = newBalance;
          document.getElementById("withdraw-amount").value = '';
          document.getElementById("cashout-pin").value = "";
      } else {
        alert("Wrong Pin Number");
      }
    } else {
      alert("Insufficient Balance");
    }
  });
