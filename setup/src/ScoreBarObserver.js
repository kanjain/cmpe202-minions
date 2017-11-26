// Implement Observer
function ScoreBarObserver(theSubject) {
   this.observerState;
   this.subject = theSubject;

}

// implement Observer
ScoreBarObserver.prototype = Object.create(Observer);

ScoreBarObserver.prototype.update = function() {
};