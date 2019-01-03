function Stuffing(name, price, calories){
    Meal.apply(this, arguments)
}

Stuffing.prototype = Object.create(Meal.prototype);
Stuffing.prototype.constructor = Stuffing;
