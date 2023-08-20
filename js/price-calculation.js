let total = 0;
let discountApplied = false;

//function for click card
function cardClick(target) {
  // get the product name
  const productName = target.childNodes[5].innerText;

  //add the product name to the calculattion part
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("pt-2", "pl-4", "font-semibold", "text-lg");
  p.innerHTML = `${count + 1}. ${productName}`;
  calculationEntry.appendChild(p);

  //get the product price and calculating total price
  const productPriceString = target.childNodes[7].innerText.split(" ")[0];
  const productPrice = parseFloat(productPriceString);
  total = total + productPrice;
  const totalPrice = total.toFixed(2);

  //call updateTotalPrice for further calculation
  updateTotalPrice();
}

function updateTotalPrice() {
  //get the all price related element and appply button
  const totalPriceElement = document.getElementById("Price");
  const discountPriceElement = document.getElementById("discountPrice");
  const totalElement = document.getElementById("total");
  const applyButton = document.getElementById("btn-apply");
  const makePurchaseButton = document.getElementById("makePurchaseButton");

  const totalPrice = total.toFixed(2);

  //set the total price and total
  totalPriceElement.innerText = totalPrice;
  totalElement.innerText = totalPrice;

  //makePurchase button will enabled if totalPrice is greater than 0
  if (totalPrice > 0) {
    makePurchaseButton.removeAttribute("disabled");
  } else {
    makePurchaseButton.setAttribute("disabled", "disabled");
  }


  //apply button will enabled if totalPrics is greater than 200
  if (totalPrice > 200) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", "disabled");
  }

  //discount price will be calculated if discountApplied variable is true
  if (discountApplied) {
    const couponCodeInput = document.getElementById("coupon-code-input");
    const couponCode = couponCodeInput.value;

    if (couponCode === "SELL200") {
      const discountPercentage = 20;
      const discountAmount = (discountPercentage / 100) * totalPrice;
      const discountAmountRounded = discountAmount.toFixed(2);
      const discountedPrice = totalPrice - discountAmount;
      const discountedPriceRounded = discountedPrice.toFixed(2);

      discountPriceElement.innerText = discountAmountRounded;
      totalElement.innerText = discountedPriceRounded;
    } else {
      discountPriceElement.innerText = "0.00";
      totalElement.innerText = totalPrice;
    }
  }
}

const applyButton = document.getElementById("btn-apply");
applyButton.addEventListener("click", () => {
  const couponCodeInput = document.getElementById("coupon-code-input");
  const couponCode = couponCodeInput.value;

  if (couponCode === "SELL200") {
    discountApplied = true;
    updateTotalPrice();
  }
});

//////////////////////////
// RESET the previous calculated part when goHome button is clicked
const calculationEntry = document.getElementById("calculation-entry");
const PriceE = document.getElementById("Price");
const discountPrice = document.getElementById("discountPrice");
const totall = document.getElementById("total");
const couponCodeInputT = document.getElementById("coupon-code-input");
const applyButtonn = document.getElementById("btn-apply");
const makePurchaseButton = document.getElementById("makePurchaseButton");

function calculatedValueReset() {
  discountApplied = false;
  total = 0;
  PriceE.innerText = total.toFixed(2);
  discountPrice.innerText = "0.00";
  totall.innerText = "0.00";
  couponCodeInputT.value = "";
  calculationEntry.innerHTML = "";
  applyButtonn.setAttribute("disabled", "disabled");
  makePurchaseButton.setAttribute("disabled", "disabled");
}
