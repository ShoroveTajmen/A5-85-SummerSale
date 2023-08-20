//function for click card
let total = 0;
let couponApplied = false;
function cardClick(target) {
  const productName = target.childNodes[5].innerText;

  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("pt-2", "pl-4", "font-semibold", "text-lg");
  p.innerHTML = `${count + 1}. ${productName}`;
  calculationEntry.appendChild(p);

  const productPriceString = target.childNodes[7].innerText.split(" ")[0];
  const productPrice = parseFloat(productPriceString);
  total = total + productPrice;
  const totalPrice = total.toFixed(2);

  updateTotalPrice();
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById("Price");
  const discountPriceElement = document.getElementById("discountPrice");
  const totalElement = document.getElementById("total");
  const applyButton = document.getElementById("btn-apply");

  const totalPrice = total.toFixed(2);

  totalPriceElement.innerText = totalPrice;

  if (totalPrice > 200) {
    applyButton.removeAttribute("disabled");
    const couponCodeInput = document.getElementById("coupon-code-input");
    const couponCode = couponCodeInput.value;

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

    } else {
      discountPriceElement.innerText = "0.00";
      totalElement.innerText = totalPrice;
    }
  } else {
    applyButton.setAttribute("disabled", "disabled");
    discountPriceElement.innerText = "0.00";
    totalElement.innerText = totalPrice;
  }
 
}


// Add event listener for the coupon code input
const couponCodeInput = document.getElementById("coupon-code-input");
couponCodeInput.addEventListener("input", () => {
  updateTotalPrice();
});
//For every reload apply button will be disbaled and coupon field will be clear
window.addEventListener("load", () => {
  const applyButton = document.getElementById("btn-apply");
  applyButton.setAttribute("disabled", "disabled");

  const couponCodeInput = document.getElementById("coupon-code-input");
  couponCodeInput.value = ""; // Clear the input field
});
