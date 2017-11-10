SaveTheMinions.EndOfGame = function(game) {
	buttonContinue = null;
	state = null;
};
SaveTheMinions.EndOfGame.prototype = {
	create: function() {
		this.showStory();
	},
	showStory: function() {
		this.game.add.sprite(0, 0, 'background_city');
		//this.game.add.sprite(100, 100, 'story');
		//this.game.add.sprite(0, 0, 'screen-story');
		this.state = 'story';

		var style = { font: "75px ComicBook", fill: "#ff0044", align: "center" };
    var text = this.game.add.text(470, 250, "You Lost! \n Your score \n"+this.game.displayscore, style);
    text.anchor.set(0.5);

		startButton = this.add.button(320, 400, 'playBtn', function(){this.game.state.start('Game')}, this, 1, 0, 2);
		startButton.input.useHandCursor = true;
		startButton.anchor.setTo(0.5,0.5);

		backButton = this.add.button(320, 500, 'backBtn', function(){this.game.state.start('MainMenu')}, this, 1, 0, 2);
		backButton.input.useHandCursor = true;
		backButton.anchor.setTo(0.5,0.5);
	}
};
