function MinionFactory(){
	this.createMinions = function(game, typeOfMinion){
		var minionSprite;

		if(typeOfMinion === 'Dave'){
			console.log('Dave is Created!');
			minionSprite = new Dave(game);
			console.log(minionSprite);
		}else if (typeOfMinion === "Tim") {
			console.log('Tim is Created!');
            minionSprite = new Tim(game);
            console.log(minionSprite);
		} else if (typeOfMinion === "Jerry") {
			console.log('Jerry is Created!');
            minionSprite = new Jerry(game);
            console.log(minionSprite);
		} else if (typeOfMinion === "Bomb") {
			console.log('Bomb is Created!');
            minionSprite = new Bomb(game);
            console.log(minionSprite);
        }
		minionSprite.type = typeOfMinion;

		return minionSprite;
	}
};

var Dave = function (game) {
	this.minion = game.add.sprite(0,300,'minions_spritesheet');
    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=0;
    this.minion.inputEnabled = true;
};
 
var Tim = function (game) {
	this.minion = game.add.sprite(0,300,'minions_spritesheet');
    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=1;
    this.minion.inputEnabled = true;
};
 
var Jerry = function (game) {
	this.minion = game.add.sprite(0,300,'minions_spritesheet');
    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=2;
    this.minion.inputEnabled = true;
};
 
var Bomb = function (game) {
	this.minion = game.add.sprite(0,300,'minions_spritesheet');
    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=3;
    this.minion.inputEnabled = true;
};