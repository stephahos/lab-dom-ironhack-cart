// ITERATION 1

function updateSubtotal(product) {
//console.log('Calculating subtotal, yey!');// 

const price = product.querySelector('.price span');
const priceText = Number(price.innerText);
console.log(priceText);

const quantity = product.querySelector('.quantity input');
const quantityValue = Number(quantity.value);
console.log(quantityValue);

const subtotal = priceText * quantityValue;
//console.log(subtotal);

const sub = product.querySelector('.subtotal span');
sub.innerText = subtotal
//console.log(subtotal);
return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  const products= document.querySelectorAll(".product");
  let totalSubTotal = 0;
  products.forEach((element) => {
    subtotal = updateSubtotal(element);
  totalSubTotal += subtotal;
  return totalSubTotal
  })
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = totalSubTotal ;  
}
 // const subTotalText = document.querySelectorAll(".subtotal span");
 // const subTotalTextArr = Array.from(subTotalText);

 // subTotalTextArr.forEach((element) => {
 //   totalSubTotal += element;
 //   return totalSubTotal;

  /* for (let i = 0; i < subTotalTextArr.length; i++ ){
    console.log(subTotalTextArr[i] * 2)
 return totalSubTotal;
} */
 
  //const totalValue = document.querySelector('#total-value span');
  //console.log(totalValue.innerHTML)

  //return totalValue.innerHTML = totalSubTotal;
  
 /*  1st method:
document.querySelectorAll(".product").forEach((element) => {
    totalSubTotal += updatedSub ;
    console.log( totalSubTotal);

second method:
 for (let i = 0; i < subTotalText.length; i++ ){
  subTotalText[i] = Number(subTotalText[i].innerText);
  totalSubTotal += subTotalText[i];
  
 third method:
  subTotalText.forEach((element) => {
  let eachSub = Number(element.innerText);
  console.log(eachSub);
  totalSubTotal += eachSub;
  console.log(totalSubTotal);
  totalSubTotal += subTotalText[i];
*/

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {

  const row = document.createElement();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('btn.btn-remove')
  removeBtns.forEach((removeBtn) =>{
    removeBtn.addEventListener('click',() =>{
      removeBtn.parentNode;parentNode.remove();
    })
  })
document.querySelector('#create').addEventListener('click'), (event) => {
  console.log(event.target.parentNode.parentNode)
}
  //... your code goes here
});
