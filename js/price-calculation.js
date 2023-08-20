//function for click card
let total = 0;
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

  if (totalPrice > 200) {
    const discountPercentage = 20;
    const discountAmount = (discountPercentage / 100) * totalPrice;
    const discountAmountRounded = discountAmount.toFixed(2);

    //get discount element
    const discount = document.getElementById("discountPrice");
    discount.innerText = discountAmountRounded;

    const discountedPrice = totalPrice - discountAmount;
    const discountedPriceRounded = discountedPrice.toFixed(2);

    //get total element
    const Total = document.getElementById('total');;
    Total.innerText = discountedPriceRounded;
  }

  //get totalPrice element
  const Price = document.getElementById("Price");
  Price.innerText = totalPrice;
}
