// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalCalculation = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalCalculation;
  
  return subtotalCalculation
  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const products = document.getElementsByClassName("product");
  const allProducts = [...products];
  let value = 0;
  allProducts.forEach((product) => { 
    return value += updateSubtotal(product)
  });
  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = value;
  //const subtotalArr = [...finalValue];
  //totalValue.innerText = subtotalArr.reduce((a, b) => a + b, 0);
  //return totalValue

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
