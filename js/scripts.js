// Business Logic
function Pizza(toppings, size){
  this.toppings = [];
  this.size = size;
}
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

pizza1 = new Pizza();
console.log(pizza1);


//User Logic    
$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();
    const selectSize = $("#select-size option:selected").val();
    pizza1.size = selectSize;
    console.log(pizza1.size)
    $("div#size-append").append("Your pizza size is: " + selectSize);
    pizza1.cost;
    
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza1.toppings.push($(this).val());
      $("div#toppings").append("Your toppings are: " + pizza1.toppings[0] + ", " + pizza1.toppings[1]);
    });


    });
  });
