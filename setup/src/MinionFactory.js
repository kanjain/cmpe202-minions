function MinionFactory() {
	this.createMinions = function(game, typeOfMinion, currentLvlState) {
		var minionSprite;
		console.log(typeOfMinion);
		if (typeOfMinion === "Bomb") {
			minionSprite = new BadMinion({game:game, image:'bomb', currentLvlState:currentLvlState});
			minionSprite.name="Bomb";
			minionSprite.score = -1;
		}

		else if (typeOfMinion === "BadMinion") {
			minionSprite = new BadMinion({game:game, image:'badminion', currentLvlState:currentLvlState});
			minionSprite.scale.setTo(0.1, 0.1);
			minionSprite.name="BadMinion";
			minionSprite.score = -10;
		}

		else {
			
			minionSprite = new GoodMinion({game:game, image:'minions_spritesheet'});
			
			minionSprite.type = typeOfMinion;
			// check type of minino and set minions' properties accordingly
			if (typeOfMinion === 'Dave') {
				minionSprite.name = "Dave";
				minionSprite.score = 1; // slim minion
				minionSprite.frame = 1;

			} else if (typeOfMinion === "Tim") {
				minionSprite.name = "Tim";
				minionSprite.score = 3; // fat minion
				minionSprite.frame = 2;

			} else if (typeOfMinion === "Jerry") {
				minionSprite.name = "Jerry";
				minionSprite.score = 2; // slender minion
				minionSprite.frame = 3;

			}
        }
		
		return minionSprite;
	}
};
