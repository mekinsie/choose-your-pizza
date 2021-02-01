// Business Logic
function Pizza(size){
  this.toppings = [];
  this.size = size;
}

pizza1 = new Pizza();

Pizza.prototype.cost = function(message) {
  switch (pizza1.size) {
    case ("Large"):
      cost = 24 + pizza1.toppings.length;
      message.push("Your total is $" + cost)
      break;
    case ("Medium"):
      cost = 17 + pizza1.toppings.length;
      message.push("Your total is $" + cost)
      break;
    case ("Small"):
      cost = 12 + pizza1.toppings.length;
      message.push("Your total is $" + cost)
      break;
    default:
      message.push("Please choose a pizza size")
      }};

//User Logic    
$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();
    pizza1.toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza1.toppings.push($(this).val());
    });
    pizza1.size = $("#select-size option:selected").val();
    $("div#size-append").empty();
    $("div#size-append").append("Your pizza size is: " + pizza1.size);
    
    let message = [];
    pizza1.cost(message);
    $("div#cost").empty();
    $("div#cost").append(message);
  });
});
