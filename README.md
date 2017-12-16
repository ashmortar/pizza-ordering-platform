# Pizza Ordering Platform
#### A fake pizza restaurant you can order from 12/15/2017
#### by _**Aaron Ross**_

## Description

This is a dummy webpage for a pizza restaurant with order collating and price calculating functions.  It will also collect an address if the user "orders" for delivery.

## Setup/Installation Requirements

* Download or clone this repository
* open index.html in the web browser of your choice
* build some 'za!

## Support and Contact Info

If you have any questions or concerns please contact me via email: ashmortar@gmail.com

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* jQuery

## Website on gh-pages

http://ashmortar.github.io/pizza-ordering-platform


## Specs

|  Behavior   |  Input     |      Output      |
|------------:|:----------:|:-----------------|
| can store and return the size of the pizza | medium | pizza: size[medium]|
|can store and return toppings for the pizza | mushrooms, olives, anchovies | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"] |
|can calculate price of pizza based on size and toppings | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"] | Cost: $11.50 |
|can store multiple pizzas | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"]; pizza: size["large"], toppings["extra cheese"] | Order: Item 1: pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"]; Item 2: pizza: size["large"], toppings["extra cheese"]  |
|can return cost of each pizza and total price of order | order with two above pizzas | Order: Item 1: $11.50, Item 2: $15.50, total: $27.00 |
| can store an address for delivery | 123 Eat St, PizzzaTown, PepperonniState 12345 | Delivery Address : 123 nw eat st, PizzzaTown, PepperonniState 12345 |



## License and Copyright

Copyright 2017 Aaron Ross
