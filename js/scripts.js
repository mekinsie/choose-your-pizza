// Business Logic
function Pizza(toppings, size){
  this.toppings = toppings;
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
      
//User Logic    
$(document).ready(function(){
  $("input#submit").submit(function(event){
    event.preventDefault();
    const selectSize = $("#select-size").val();
    pizza1.size.push(selectSize);
    // const pepperoni = $("input#pepperoni").val();
    // const sausage = $("input#sausage").val();
    // const ham = $("input#ham").val();
    // const pineapple = $("input#pineapple").val();
    // const mushroom = $("input#mushroom").val();
    // const pesto = $("input#pesto").val();
    // const basil = $("input#basil").val();
    let checkedToppings = []
    $("input:checkbox[name=toppings]:checked").each(function(){
      checkedToppings.push($(this).val());
      pizza1.toppings.push(checkedToppings);
    });
  });
});
console.log(pizza1);
