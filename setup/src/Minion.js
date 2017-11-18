var UPS = function() {
    this.move = function(sprite, xStart, xEnd, yStart, yEnd) {
        
        sprite.body.velocity.y = sprite.game.rnd.realInRange(yStart, yEnd);
        sprite.body.velocity.x = sprite.game.rnd.realInRange(xStart, xEnd);
        sprite.body.collideWorldBounds = true;
        sprite.body.bounce.set(1);
    }
};

var UPSS = function() {
    this.move = function(sprite, xStart, xEnd, yStart, yEnd) {
        
        sprite.body.velocity.y = sprite.game.rnd.realInRange(yStart, yEnd);
        sprite.body.velocity.x = sprite.game.rnd.realInRange(xStart, xEnd);
    }
};
//================================================================================
// Minion required reference to game, a random xVal for init starting position 
// and velocity, image for appearance. 
//================================================================================

var Minion = function ({game, image}) {
    xVal = game.rnd.pick([0, game.world.width]);
    Phaser.Sprite.call(this, game, xVal, 300, image);
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
Minion.prototype.moveStrategy = new UPSS();
Minion.prototype.move = function (xStart, xEnd, yStart, yEnd){
    
    return this.moveStrategy.move(this, xStart, xEnd, yStart, yEnd);
}

Minion.prototype.setStrategy = function (strategy) {
    this.moveStrategy = strategy;
}

Minion.prototype.initProperties = function () {
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = false;
    this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;

}

