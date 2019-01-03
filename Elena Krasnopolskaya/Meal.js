
function Meal(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}

Meal.prototype.getName = function () {
    return this.name;
};

Meal.prototype.getPrice = function () {
    return this.price;
};

Meal.prototype.getCalories = function () {
    return this.calories;
};