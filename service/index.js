const express = require("express");
const eventsConfig = require("./config").events;
const Restaurant = require("./restaurant");
const app = express(); //refernce to export from the module
const port = 8080;


//create restaurant instance
const MAX_ORDERS = 10;
const restaurant = new Restaurant();
let history = [];

//attach callbacks to events
restaurant
  .on(eventsConfig.showOrders, displayAll)
  .on(eventsConfig.resetOrdersNum, reset)
  .on(eventsConfig.addOrders, add)
  .on(eventsConfig.removeOrders, remove);

//calling restaurant func
restaurant.addOrders();
restaurant.addOrders();
restaurant.addOrders();
restaurant.removeOrders();
restaurant.showOrders();
restaurant.removeOrders();
restaurant.showOrders();
restaurant.resetOrders();

app.all("/", (req, res) => {
  res.json(history);
});

//callbacks function
function displayAll() {
  history.push(`display: orders number is: ${this.orders}`);
  console.log(`display: orders number is: ${this.orders}`);
}

function reset() {
  this.orders = 0;
  history.push(`reset: orders number is: ${this.orders}`);
  console.log(`reset: orders number is: ${this.orders}`);
}

function add() {
  if (this.orders > MAX_ORDERS) {
    history.push(`add: too much orders, can not add ${this.orders}`);
    console.log("too much orders");
  } else {
    this.orders++;
    history.push(`add: orders number is: ${this.orders}`);
    console.log(`add: orders number is: ${this.orders}`);
  }
}

function remove() {
  this.orders--;
  console.log(`remove: orders number is: ${this.orders}`);
  history.push(`remove: orders number is: ${this.orders}`);
}

app.listen(port, () => console.log(`listening on port ${port}`));