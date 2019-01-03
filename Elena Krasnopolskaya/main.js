var order = new Order();
order.addItem(new HamburgerBig(new StuffingCheese()));
order.addItem(new HamburgerSmall(new StuffingPotato()));
order.addItem(new Coffee());
order.addItem(new Cola());
order.addItem(new SaladOlivie(200));
console.log(order.getBill());