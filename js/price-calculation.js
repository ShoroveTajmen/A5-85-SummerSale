//function for click card
let total = 0;
// let couponApplied = false;
function cardClick(target) {
  //get the product name
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

  //set the total price
  totalPriceElement.innerText = totalPrice;

  //When totalPrice is > 0 make purchase button will enabled
  if (totalPrice > 0) {
    makePurchaseButton.removeAttribute("disabled");
  } else {
    makePurchaseButton.setAttribute("disabled", "disabled");
  }

  //check if totalPrice is grreater than 200 or not
  if (totalPrice > 200) {
    applyButton.removeAttribute("disabled");

    const couponCodeInput = document.getElementById("coupon-code-input");
    const couponCode = couponCodeInput.value;
    //if coupon code is correct further calculation will be execute
    if (couponCode === "SELL200") {
      const discountPercentage = 20;
      const discountAmount = (discountPercentage / 100) * totalPrice;
      const discountAmountRounded = discountAmount.toFixed(2);
      const discountedPrice = totalPrice - discountAmount;
      const discountedPriceRounded = discountedPrice.toFixed(2);
      applyButton.addEventListener("click", function () {
        discountPriceElement.innerText = discountAmountRounded;
        totalElement.innerText = discountedPriceRounded;
      });
    }
    //if coupon code is not right then discount price will not be updated and total will be the same as previous
    else {
      discountPriceElement.innerText = "0.00";
      totalElement.innerText = totalPrice;
    }
  }
  //when totalPrice is not > 200 then button remain disabled and diiscount price will not be updated as well as total will be the same as previous
  else {
    applyButton.setAttribute("disabled", "disabled");
    discountPriceElement.innerText = "0.00";
    totalElement.innerText = totalPrice;
  }
}
// set the event listener to coupon code input
const couponCodeInput = document.getElementById("coupon-code-input");
couponCodeInput.addEventListener("input", () => {
  updateTotalPrice();
});


//////////////////////////
// RESET the previous calculated part when goHome button is clicked
const calculationEntry = document.getElementById("calculation-entry");
const PriceE = document.getElementById("Price");
const discountPrice = document.getElementById("discountPrice");
const totall = document.getElementById("total");
const couponCodeInputT = document.getElementById("coupon-code-input");
const applyButton = document.getElementById("btn-apply");
const makePurchaseButton = document.getElementById('makePurchaseButton');

function calculatedValueReset() {
  total = 0;
  PriceE.innerText = total.toFixed(2);
  discountPrice.innerText = "0.00";
  totall.innerText = "0.00";
  couponCodeInputT.value = "";
  calculationEntry.innerHTML = "";
  applyButton.setAttribute("disabled", "disabled"); 
  makePurchaseButton.setAttribute("disabled", "disabled");
}
