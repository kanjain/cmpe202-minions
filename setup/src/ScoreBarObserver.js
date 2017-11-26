// Implement Observer
function ScoreBarObserver(theSubject) {
   this.observerState;
   this.subject = theSubject;// game

}

// implement Observer
ScoreBarObserver.prototype = new Observer();
