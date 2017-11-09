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
				minionSprite.score = 3;
				minionSprite.frame = 2;

			} else if (typeOfMinion === "Jerry") {
				minionSprite.name = "Jerry";
				minionSprite.score = 2;
				minionSprite.frame = 3;

			}
        }
		
		return minionSprite;
	}
};
