//================================================================================
// Minion required reference to game, a random xVal for init starting position 
// and velocity, image for appearance. 
//================================================================================

var Minion = function ({game, xVal, image}) {
    
    Phaser.Sprite.call(this, game, xVal, 300, image);
    this.score = 0;
    this.game = game;
    this.initProperties();
    
};


//================================================================================
// Prototypes necessary for inheritance
//================================================================================

Minion.prototype = Object.create(Phaser.Sprite.prototype);
Minion.prototype.constructor = Minion;

//================================================================================
// Added prototypes
//================================================================================

Minion.prototype.move = function (xStart, xEnd, yStart, yEnd){
    this.body.velocity.y = this.game.rnd.realInRange(yStart, yEnd);
    this.body.velocity.x = this.game.rnd.realInRange(xStart, xEnd);
}

Minion.prototype.initProperties = function () {
    
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = false;
    if(xVal == 0){
        this.move(150.0, 200.0, -300.0, -500.0);
    }
    else{
        this.move(-150.0, -200.0, -300.0, -500.0);
    }
}