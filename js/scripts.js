//CONSTRUCTORS AND PROTOTYPES ---------------------------------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0.00;
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    this.price = 5.00;
  } else if (this.size === "medium") {
    this.price = 10.00;
  } else if (this.size === "large") {
    this.price = 15.00;
  } else {
    console.log("this is not a pizza size")
  }
  for (var i = 0; i < this.toppings.length; i++) {
    this.price += 0.50;
  }
  console.log("cost: $" + this.price);
}


//LOOSE HELPER FUNCTIONS ---------------------------------------





//GLOBAL VARIABLES ---------------------------------------------






//FRONT END BELOW THIS LINE ------------------------------------
