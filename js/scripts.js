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
var order = new Order();
pizzaCount = 0;
//FRONT END BELOW THIS LINE ------------------------------------
$(document).ready(function() {

  //this will hide the #delivery-panel and show either the address form or the order information
  $("#begin-order").click(function() {
    if ($("input:radio[name=delivery]:checked").val() === "Pick-Up") {
      $("#delivery-panel").hide();
      $("#order-panel").fadeIn("slow");
    } else if ($("input:radio[name=delivery]:checked").val() === "delivery") {
      $("#delivery-panel").hide();
      $("#address-panel").fadeIn("slow");
    }
  })

  //this will save the address to the globall address variable then move on to ordering
  $("form#address-form").submit(function(event) {
    event.preventDefault();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    order.addAddress(street, city, state, zip);
    $("#address-panel").hide();
    $("#order-panel").fadeIn("slow");
  })

  //this will add a pizza to the order and display that pizza below the add pie button
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza-size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    })
    order.addItem(size, toppings);
    $(".pizzas").append('<span>' + (pizzaCount + 1) + '.) ' + order.item[pizzaCount].size + ' pizza with ' + order.item[pizzaCount].toppings.join(", ") + '</span><br>')
    pizzaCount++;
    $("input:checkbox[name=topping]:checked").each(function() {
      $(this).prop("checked", false);
    })
  })

  //this will complete the order, hide the order-form and display the pizzas ordered, their cost, the total pice and the delivery address if applicable
  $("#finish-order").click(function() {
    $("#order-panel").hide();
    $("#complete-panel").fadeIn();
    order.getTotal();
    for (var m = 0; m < order.item.length; m++) {
      $(".ordered-pizzas").append('<li>' + order.item[m].size + ' pizza with ' + order.item[m].toppings.join(", ") + '</li>')
      $(".pizza-cost").append('<li>$' + order.item[m].price.toFixed(2) + '</li>')
    }
    $("#total").text('$' + order.total.toFixed(2));
    if (order.address.length === 1) {
      $("#delivery-address-display").show();
      $("#show-street").text(order.address[0].street);
      $("#show-city").text(order.address[0].city);
      $("#show-state").text(order.address[0].state);
      $("#show-zip").text(order.address[0].zip);
    }
  })














})
