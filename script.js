let priceBasic = document.querySelector(".price-display-basic");
let pricePro = document.querySelector(".price-display-pro");
let priceMaster = document.querySelector(".price-display-master");

let toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", changePrice);
toggleSwitch.checked = false;

function changePrice() {
  if (toggleSwitch.checked == true) {
    priceBasic.innerText = "19.99";
    pricePro.innerText = "24.99";
    priceMaster.innerText = "39.99";
  } else {
    priceBasic.innerText = "199.99";
    pricePro.innerText = "249.99";
    priceMaster.innerText = "399.99";
  }
}
