function Order(){
    this.isComplete = false;
    this.items = []
}
Order.prototype.constructor = Order;

Order.prototype.addItem = function(meal){
    if(this.isComplete)
        return
    else{
        this.items.push(meal)
    }
};

Order.prototype.delItem = function(indexItem){
    if(this.isComplete)
        return;
    else{
        this.items.splice(indexItem, 1);
    }
};

Order.prototype.getBill = function(){
    var price = 0;
    var calories = 0;
    this.items.forEach(function(item){
        price += item.getPrice();
        calories += item.getCalories();
    });
    this.isComplete = true;
    return ("Price: " + price + " Calories: " + calories);
};