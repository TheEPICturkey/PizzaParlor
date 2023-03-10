//Utility Logic 
function getInputValue(inputArray){
  const innerTextArray = [];
  inputArray.forEach(function(element){
    const elementString = element.value;
    innerTextArray.push(elementString);
  });
  return innerTextArray;
}

//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

class Toppings extends Pizza {
  pushToPizza(input){
    this.prices.push(input);
  }
}

Pizza.prototype.totalCost = function(){
  let total = 0.00;
  if (this.size === "small"){
    total += 10.00;
  } else if (this.size === "medium"){
    total += 12.00;
  } else if (this.size === "large"){
    total += 14.00
  }

  // }
  //   total += 5.00; 
  // }

  this.toppings.forEach(function(element){
    switch (element) {
      case("pepperoni"):
      case("veggieMix"):
      case("pineapple"):
      case("sausage"):
      case("cheese"):
      case("crust"):
        total += 1.50;
        break;
  }
  });

  subtotal = total * 1;
  total1 = subtotal * 1.10;
  total = total * 1.10
  return total;
}

//UI Logic
window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleSubmission);
  document.querySelector("form#pizza-form").addEventListener("reset", handleReset);
})

function handleSubmission(event){
  event.preventDefault();
  const orderDisplay = document.getElementById("order-list");
  orderDisplay.innerHTML="";
  const size = document.querySelector("input[name='size']:checked").value;
  const toppingsSelected = document.querySelectorAll("input[name='toppings']:checked");
  const toppings = getInputValue(toppingsSelected);
  const pizza1 = new Pizza(size, toppings, cheese);
  const cost = pizza1.totalCost();
  const myOrder = convertOrder(pizza1);
  const myCost = listCosts(myOrder);
  displayOrder(myOrder, myCost);
  displayCost(cost);
}

function handleReset(){
  const orderDisplay = document.getElementById("order-list");
  const subDisplay = document.querySelector("span#subtotal");
  const taxDisplay = document.querySelector("span#total-tax");
  const costDisplay = document.querySelector("span#total-cost");
  orderDisplay.innerHTML="";
  subDisplay.innerText = "";
  taxDisplay.innerText = "";
  costDisplay.innerText = "";
}

function convertOrder(order){
  const processArray = Object.values(order);
  const convertedArray = [];
  processArray.forEach(function(element){
    if(Array.isArray(element)){
      const subArray = Object.values(element);
      subArray.forEach(function(element){
        convertedArray.push(element);
      });
    } else {
      convertedArray.push(element);
    }
  });
  return convertedArray;
}

function listCosts(convertedArray){
  const listArray = []
  convertedArray.forEach(function(element){
    switch (element) {
      case("pepperoni"):
      case("veggieMix"):
      case("pineapple"):
      case("sausage"):
      case("cheese"):
      case("crust"):
        listArray.push("1.50");
        break;
      case("small"):
        listArray.push("10.00");
        break;
      case("medium"):
        listArray.push("12.00");
        break;
      case("large"):
        listArray.push("14.00");
        break;
      default:
        listArray.push("2.00");
        console.log("pushing " + element)
    }
  });
  return(listArray);
}

function displayOrder(order, costs){
  const orderList = document.createElement("ol");
  const orderDisplay = document.getElementById("order-list");
  for (let i=0; i < order.length; i++){
    const li = document.createElement("li");
    li.innerText = order[i] + "..." + costs[i];
    orderList.append(li);
  }
  orderDisplay.append(orderList);
}

function displayCost(cost){
  const subDisplay = document.querySelector("span#subtotal");
  const taxDisplay = document.querySelector("span#total-tax");
  const costDisplay = document.querySelector("span#total-cost");
  let sub = cost / 1.10;
  let tax = sub * 0.10;
  sub = "$" + sub.toFixed(2);
  tax = "$" + tax.toFixed(2);
  cost = "$" + cost.toFixed(2);
  subDisplay.innerText = sub;
  taxDisplay.innerText = tax;
  costDisplay.innerText = cost;
}
