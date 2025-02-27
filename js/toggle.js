document.getElementById("cash-out").style.display = "none";

document
  .getElementById("withdraw-money-box")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none";
      document.getElementById("cash-out").style.display = "inline";
  });

document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "inline";
  document.getElementById("cash-out").style.display = "none";
});






