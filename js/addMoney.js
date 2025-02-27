const addMoneyButton = document.getElementById('add-money')

addMoneyButton.addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = document.getElementById("add-amount").value;

    const convertedAddAmount = parseFloat(addAmount);

    const accountPin = document.getElementById("account-pin").value;

    const convertedPin = parseInt(accountPin);

    let balance = document.getElementById("balance").innerText;

    let convertedBalance = parseFloat(balance);

      if (convertedPin === 1234) {
        if (convertedAddAmount > 0) {
          const totalBalance = convertedBalance + convertedAddAmount;
          document.getElementById("balance").innerText = totalBalance;
          document.getElementById("add-amount").value = ""; //add amount field clear after form submit
          document.getElementById("account-pin").value = ""; //account pin field clear after form submit
        } else {
          alert("Wrong Amount");
        }
      } else {
        alert('Wrong Pin Number')
      }

})