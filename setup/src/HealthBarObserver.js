// Implement Observer
function HealthBarObserver(theSubject) {
   this.observerState;
   this.subject = theSubject;// game
}

// implement Observer
HealthBarObserver.prototype = Object.create(Observer);

HealthBarObserver.prototype.update = function() {
};