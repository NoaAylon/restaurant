const MAX_ORDERS = 10;
let history = [];

module.exports.ordersHistory = () => (history)

module.exports.displayAll = function displayAll() {
    history.push(`display: orders number is: ${this.orders}`);
    console.log(`display: orders number is: ${this.orders}`);
}

module.exports.reset = function reset() {
    this.orders = 0;
    history.push(`reset: orders number is: ${this.orders}`);
    console.log(`reset: orders number is: ${this.orders}`);
}

module.exports.add = function add() {
    if (this.orders > MAX_ORDERS) {
        history.push(`add: too much orders, can not add ${this.orders}`);
        console.log("too much orders");
    } else {
        this.orders++;
        history.push(`add: orders number is: ${this.orders}`);
        console.log(`add: orders number is: ${this.orders}`);
    }
}

module.exports.remove = function remove() {
    this.orders--;
    console.log(`remove: orders number is: ${this.orders}`);
    history.push(`remove: orders number is: ${this.orders}`);
}