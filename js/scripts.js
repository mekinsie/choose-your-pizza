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
        return cost;
        break;
      case ("medium"):
        cost = 17;
        return cost;
        break;
      case ("small"):
        cost = 12;
        return cost;
        break;
      default:
        $("div#size").append("Please choose a pizza size")
    }};






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