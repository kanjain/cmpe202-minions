// http://www.dofactory.com/javascript/observer-design-pattern
function Observer() {
    this.handlers = [];  // observers
    this.handlersThisObj = [];
}
 
Observer.prototype = {
    subscribe: function(fn, thisObj) {
        this.handlers.push(fn);
        this.handlersThisObj.push(thisObj);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    notify: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}