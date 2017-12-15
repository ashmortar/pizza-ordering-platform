## Specs

|  Behavior   |  Input     |      Output      |
|------------:|:----------:|:-----------------|
| can store and return the size of the pizza | medium | pizza: size[medium]|
|can store and return toppings for the pizza | mushrooms, olives, anchovies | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"] |
|can calculate price of pizza based on size and toppings | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"] | Cost: $11.50 |
|can store multiple pizzas | pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"]; pizza: size["large"], toppings["extra cheese"] | Order: Item 1: pizza: size["medium"], toppings["mushrooms", "olives", "anchovies"]; Item 2: pizza: size["large"], toppings["extra cheese"]  |
|can return cost of each pizza and total price of order | order with two above pizzas | Order: Item 1: $11.50, Item 2: $15.50, total: $27.00 |
| can store an address for delivery | 123 Eat St, PizzzaTown, PepperonniState 12345 | Delivery Address : 123 nw eat st, PizzzaTown, PepperonniState 12345 |
