const events = require('events');

//Restaurant class: methods
class Restaurant extends events.EventEmitter {

    constructor() {
        super();
        this.orders = 0;

    }

    addOrders() {
        //emitting add event
        this.emit('add');
        return this.orders;
    }

    removeOrders() {
        //emitting remove event
        this.emit('remove');
        return this.orders;
    }

    showOrders() {
        //emitting display event
        this.emit('displayAll');
        return this.orders;

    }

    resetOrders() {
        //emitting reset event
        this.emit('reset');
        return this.orders;

    }

}

module.exports = Restaurant;