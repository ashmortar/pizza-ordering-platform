//CONSTRUCTORS AND PROTOTYPES ---------------------------------
function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

function Order() {
  this.item = [];
  this.total = 0;
  this.address = [];
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0.00;
}


Order.prototype.addItem = function(size, toppings) {
  this.item.push(new Pizza(size, toppings));
}

Order.prototype.addAddress = function(street, city, state, zip) {
  this.address.push(new Address(street, city, state, zip))
}

Order.prototype.getTotal = function() {
  for (var j = 0; j < this.item.length; j++) {
    this.item[j].cost();
    this.total += this.item[j].price;
  }
  console.log("Total: $" + this.total);
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
