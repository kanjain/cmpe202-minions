//================================================================================
// Minion required reference to game, a random xVal for init starting position 
// and velocity, image for appearance. 
//================================================================================

var BadMinion = function ({game, image, currentLvlState}) {
    Minion.call(this, {game:game, image:image});
    if (currentLvlState instanceof Lvl3State) {
        this.moveStrategy = new BigBombStrategy();
    }
    // check for which side the minion is created and set veloc accordingly
    if (xVal == 0) this.move(150.0, 200.0, -300.0, -500.0);
    else this.move(-150.0, -200.0, -300.0, -500.0);
};


//================================================================================
// Prototypes necessary for inheritance
//================================================================================

BadMinion.prototype = Object.create(Minion.prototype);
BadMinion.prototype.constructor = BadMinion;

//================================================================================
// Added prototypes
//================================================================================



