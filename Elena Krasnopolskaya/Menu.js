function StuffingCheese(){
    Meal.apply(this, ["Сыр", 10, 20])
}
StuffingCheese.prototype = Object.create(Meal.prototype);
StuffingCheese.prototype.constructor = StuffingCheese;


function StuffingSalad(){
    Meal.apply(this, ["Салат", 20, 5])
}
StuffingSalad.prototype = Object.create(Meal.prototype);
StuffingSalad.prototype.constructor = StuffingSalad;

function StuffingPotato(){
    Meal.apply(this, ["Картофель", 15, 10])
}
StuffingPotato.prototype = Object.create(Meal.prototype);
StuffingPotato.prototype.constructor = StuffingPotato;


function HamburgerBig(stuffing){
    Hamburger.apply(this, ["Большой", 100, 40, stuffing])
}
HamburgerBig.prototype = Object.create(Hamburger.prototype);
HamburgerBig.prototype.constructor = HamburgerBig;


function HamburgerSmall(stuffing){
    Hamburger.apply(this, ["Маленький", 50, 20, stuffing])
}
HamburgerSmall.prototype = Object.create(Hamburger.prototype);
HamburgerSmall.prototype.constructor = HamburgerSmall;

function SaladCesare(weight){
    Salad.apply(this, ["Цезарь", 100, 20, weight])
}
SaladCesare.prototype = Object.create(Salad.prototype);
SaladCesare.prototype.constructor = SaladCesare;

function SaladOlivie(weight){
    Salad.apply(this, ["Оливье", 50, 80, weight])
}
SaladOlivie.prototype = Object.create(Salad.prototype);
SaladOlivie.prototype.constructor = SaladOlivie;

function Coffee(){
    Drink.apply(this, ["Кофе", 80, 20])
}
Coffee.prototype = Object.create(Drink.prototype);
Coffee.prototype.constructor = Coffee;

function Cola(){
    Drink.apply(this, ["Кола", 50, 40])
}
Cola.prototype = Object.create(Drink.prototype);
Cola.prototype.constructor = Cola;