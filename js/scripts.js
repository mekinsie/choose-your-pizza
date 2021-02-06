// Business Logic
function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.determineCost = function(message) {
  switch (this.size) {
    case ("Large"):
      this.cost = 24 + this.toppings.length;
      message.push("Your total is $" + this.cost)
      break;
    case ("Medium"):
      this.cost = 17 + this.toppings.length;
      message.push("Your total is $" + this.cost)
      break;
    case ("Small"):
      this.cost = 12 + this.toppings.length;
      message.push("Your total is $" + this.cost)
      break;
    default:
      message.push("Please choose a pizza size")
  }
  return this.cost;
};

//User Interface Logic    
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    let size = $("#select-size option:selected").val();
    let toppings = $("input:checkbox[name=toppings]:checked").map(function(){
      return this.value
    });

    let pizza1 = new Pizza(size,toppings);
    $("div#toppings-div").empty();
    $("div#toppings-div").append("Number of Toppings: " + pizza1.toppings.length);
    $("div#size-append").empty();
    $("div#size-append").append("Pizza size: " + pizza1.size);
    
    let message = []; 
    pizza1.determineCost(message);
    $("div#cost").empty();
    $("div#cost").append(message);
  });
});
