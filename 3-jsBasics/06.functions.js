function hello() {
  console.log("Hello World!");
}

function pacersWon(){
  console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
  console.log("The number you entered was: ", x);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
  console.log(x + y);
}
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
  let myInc = a * x;
  let myTaxes = myInc - y;
  let total = myTaxes + z;
  return total; 
}

function calculatePriceIndiana(quantity, price){
  var tax = 0.07;
  var totalTax = quantity * price * tax;
  var totalPrice = totalTax + quantity * price;
  console.log(totalPrice);
  return totalPrice;
}

calculatePriceIndiana(17, 5);