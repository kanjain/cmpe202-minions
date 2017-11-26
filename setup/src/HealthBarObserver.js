// Implement Observer
function HealthBarObserver(theSubject) {
   this.observerState;
   this.subject = theSubject;// game

   return new Observer();

}

// implement Observer
HealthBarObserver.prototype = new Observer();