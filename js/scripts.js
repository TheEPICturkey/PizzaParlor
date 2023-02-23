// UL
function getInputValue(inputArray){
  const innerTextArray = [];
  inputArray.forEach(function(element){
    const elementString = element.value;
    innerTextArray.push(elementString);
  });
  return innerTextArray;
}


// BL
function Pizza(size, topping) {
this.size = size;
this.topping = topping
}

class Toppings extends Pizza {
  pushToPizza(input){
    this.prices.push(input);
  }
}

Pizza.prototype.totalCost = function(){
  let total = 0.00;
  if (this.size === "Small"){
    total += 10.00;
  } else if (this.size === "Medium"){
    total += 12.00;
  } else if (this.size === "Large"){
    total += 14.00;
  }
}
