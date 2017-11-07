function MinionFactory(){
	this.createMinions = function(game, typeOfMinion){
		var minionSprite;

		if(typeOfMinion === 'Dave'){
			//console.log('Dave is Created!');
			minionSprite = new Dave(game);
			//console.log(minionSprite);
		}else if (typeOfMinion === "Tim") {
			//console.log('Tim is Created!');
            minionSprite = new Tim(game);
            //console.log(minionSprite);
		} else if (typeOfMinion === "Jerry") {
			//console.log('Jerry is Created!');
            minionSprite = new Jerry(game);
            //console.log(minionSprite);
		} else if (typeOfMinion === "Bomb") {
			//console.log('Bomb is Created!');
            minionSprite = new Bomb(game);
            //console.log(minionSprite);
        }
		minionSprite.type = typeOfMinion;

		return minionSprite;
	}
};


var Tim = function (game) {
    xVal = game.rnd.pick([0, 950]);
    this.minion = new Minion({game:game, xVal, image:'minions_spritesheet'});
	this.minion.name="Jerry";
	this.minion.score = 1;

    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=1;
    this.minion.inputEnabled = true;
};


var Dave = function (game) {
    xVal = game.rnd.pick([0, 950]);
    this.minion = new Minion({game:game, xVal, image:'minions_spritesheet'});
	this.minion.name="Dave";
	this.minion.score = 2;

    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=0;
    this.minion.inputEnabled = true;
};

var Jerry = function (game) {

    xVal = game.rnd.pick([0, 950]);
    this.minion = new Minion({game:game, xVal, image:'minions_spritesheet'});
	this.minion.name="Jerry";
	this.minion.score = 3;

    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=2;
    this.minion.inputEnabled = true;
};

var Bomb = function (game) {

	xVal = game.rnd.pick([0, 950]);
	this.minion = new Minion({game:game, xVal, image:'bomb'});
	this.minion.name="Bomb";
	this.minion.score = -1;

    this.minion.anchor.setTo(0.5, 0.5);
    this.minion.frame=3;
    this.minion.inputEnabled = true;
};
