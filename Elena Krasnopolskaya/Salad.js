function Salad(name, price, calories, weight){
    this.weight = weight;
    Meal.apply(this, [name, price, calories]);
}

Salad.prototype = Object.create(Meal.prototype);
Salad.prototype.constructor = Salad;

Salad.prototype.getPrice = function () {
    return Meal.prototype.getPrice.apply(this) / 100 * this.weight;
};

Salad.prototype.getCalories = function () {
    return Meal.prototype.getCalories.apply(this) / 100 * this.weight;
};