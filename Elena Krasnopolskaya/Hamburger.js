function Hamburger(name, price, calories, stuffing){
    this.stuffing = stuffing;
    Meal.apply(this, [name, price, calories])
}

Hamburger.prototype = Object.create(Meal.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getPrice = function () {
    return Meal.prototype.getPrice.apply(this) + this.stuffing.getPrice();
};

Hamburger.prototype.getCalories = function () {
    return Meal.prototype.getCalories.apply(this) + this.stuffing.getCalories();
};