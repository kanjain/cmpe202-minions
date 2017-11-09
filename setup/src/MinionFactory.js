function MinionFactory() {
	this.createMinions = function(game, typeOfMinion, currentLvlState) {
		var minionSprite;
	
		if (typeOfMinion === "BadMinion") {
			minionSprite = new BadMinion({game:game, image:'bomb', currentLvlState:currentLvlState});
			minionSprite.name="BadMinion";
			minionSprite.score = -1;
        }else {
			
			minionSprite = new GoodMinion({game:game, image:'minions_spritesheet'});
			
			minionSprite.type = typeOfMinion;
			// check type of minino and set minions' properties accordingly
			if (typeOfMinion === 'Dave') {
				minionSprite.name = "Dave";
				minionSprite.score = 1;
				minionSprite.frame = 1;

			} else if (typeOfMinion === "Tim") {
				minionSprite.name = "Tim";
				minionSprite.score = 2;
				minionSprite.frame = 2;

			} else if (typeOfMinion === "Jerry") {
				minionSprite.name = "Jerry";
				minionSprite.score = 3;
				minionSprite.frame = 3;

			}
			
        }
		
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
    this.minion.frame = 0;
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
