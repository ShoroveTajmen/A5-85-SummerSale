//select first card
// document.getElementById('card-1').addEventListener('click', function(){
//     const productOneName = document.getElementById('productName1').innerText;
//     console.log(productOneName);
//     const price1 = document.getElementById('price1').innerText;
//     console.log(price1);

//     const calculationEntry = document.getElementById('calculation-entry');
//     const count = calculationEntry.childElementCount;
//     const p = document.createElement('p');
//     p.innerHTML = `${count + 1}. ${productOneName}`;
//     calculationEntry.appendChild(p);

// })
// document.getElementById('card-2').addEventListener('click', function(){
//     const product2ndName = document.getElementById('productName2').innerText;
//     console.log(product2ndName);
//     const price2 = document.getElementById('price2').innerText;
//     console.log(price2);

//     const calculationEntry = document.getElementById('calculation-entry');
//     const count = calculationEntry.childElementCount;
//     const p = document.createElement('p');
//     p.innerHTML = `${count + 1}. ${product2ndName}`;
//     calculationEntry.appendChild(p);

// })

//function for click card
let total = 0;
function cardClick(target) {
  const productName = target.childNodes[5].innerText;

  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("pt-2", "pl-4", "font-semibold");
  p.innerHTML = `${count + 1}. ${productName}`;
  calculationEntry.appendChild(p);

  const productPriceString = target.childNodes[7].innerText.split(" ")[0];
  const productPrice = parseFloat(productPriceString);
  total = total + productPrice;
  const totaPrice = total.toFixed(2);
  console.log(totaPrice);
}
