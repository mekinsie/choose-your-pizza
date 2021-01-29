// Business Logic
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  }
  pizza1 = new Pizza(["ham", "pineapple"], "medium");
  Pizza.prototype.cost = function() {
    let cost = 0
    let costSize = pizza1.size; 
    switch (costSize) {
      case ("large"):
        cost = 24;
        $("div#cost").append("Your total is $24")
        return cost;
        break;
      case ("medium"):
        cost = 17;
        $("div#cost").append("Your total is $17")
        return cost;
        break;
      case ("small"):
        cost = 12;
        $("div#cost").append("Your total is $12")
        return cost;
        break;
      default:
        $("div#cost").append("Please choose a pizza size")
    }};

$(document).ready(function(){
  const pepperoni = $("input#pepperoni").val();
  const sausage = $("input#sausage").val();
  const ham = $("input#ham").val();
  const pineapple = $("input#pineapple").val();
  const mushroom = $("input#meshroom").val();
  const pesto = $("input#pesto").val();
  const basil = $("input#basil").val();

});




  // Pizza.prototype.cost = function() {
  //   let cost = 0
  //   if (pizza1.size === "large") {
  //     cost = 24;
  //     return cost;
  //   }
  //   else if (pizza1.size === "medium"){
  //     cost = 18;
  //     return cost;
  //   }
  //   else if (pizza1.size === "small"){
  //     cost = 12;
  //     return cost;
  //   }
  //   else {
  //     return("Please choose a pizza size");
  //   }
  // };  