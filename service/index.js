const express = require("express");
const eventsConfig = require("./config").events;
const Restaurant = require("./restaurant");
const callBack = require("./callBacks");
const app = express(); //refernce to export from the module
const port = 8080;


const restaurant = new Restaurant();

//create event listener
restaurant
  .on(eventsConfig.showOrders, callBack.displayAll)
  .on(eventsConfig.resetOrdersNum, callBack.reset)
  .on(eventsConfig.addOrders, callBack.add)
  .on(eventsConfig.removeOrders, callBack.remove);

//make orders in the resturant
restaurant.addOrders();
restaurant.addOrders();
restaurant.addOrders();
restaurant.removeOrders();
restaurant.showOrders();
restaurant.removeOrders();
restaurant.showOrders();
restaurant.resetOrders();

app.all("/", (req, res) => {
  console.log(callBack.ordersHistory());
  res.json(callBack.ordersHistory());
});

//callbacks function


app.listen(port, () => console.log(`listening on port ${port}`));