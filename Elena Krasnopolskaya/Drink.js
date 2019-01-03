function Drink(name, price, calories){
    Meal.apply(this, arguments);
}

Drink.prototype = Object.create(Meal.prototype)
Drink.prototype.constructor = Drink;