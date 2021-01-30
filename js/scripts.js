// Business Logic
function Pizza(toppings, size){
  this.toppings = [];
  this.size = size;
}
pizza1 = new Pizza();
console.log(pizza1);

Pizza.prototype.cost = function() {
  let cost = 0
  switch (pizza1.size) {
    case ("Large"):
      cost = 24;
      $("div#cost").append("Your total is $" + cost )
      break;
    case ("Medium"):
      cost = 17;
      $("div#cost").append("Your total is $" + cost)
      break;
    case ("Small"):
      cost = 12;
      $("div#cost").append("Your total is $" + cost)
      break;
      default:
        $("div#cost").append("Please choose a pizza size")
}};


addToppings = function (){for(let i = 0; i < pizza1.toppings.length; i +=1){
  $("span#toppings").append(pizza1.toppings[i] + " ");
  $("div#toppings-div").show();
};
};

//User Logic    
$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();

    pizza1.size = $("#select-size option:selected").val();
    $("div#size-append").append("Your pizza size is: " + pizza1.size);
    pizza1.cost();
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza1.toppings.push($(this).val());
    addToppings();
    });
    });
  });
