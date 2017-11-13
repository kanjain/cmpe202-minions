SaveTheMinions.StoryHowto = function(game) {
	buttonContinue = null;
	state = null;
};
SaveTheMinions.StoryHowto.prototype = {
	create: function() {
		this.showStory();
	},
	showStory: function() {
		this.game.add.sprite(0, 0, 'background_city');
		this.game.add.sprite(190, 60, 'storybg');
		//this.game.add.sprite(100, 100, 'story');
		//this.game.add.sprite(0, 0, 'screen-story');
		this.state = 'story';

		var style = { font: "30px ComicBook", fill: "black", align: "center" };
    var text = this.game.add.text(500, 120, "Click on a minion to save it. Beware of ", style);
		var text1 = this.game.add.text(500, 180, "bombs! Clicking on a bomb will end ", style);
		var text3 = this.game.add.text(500, 240, "your game", style);

		text.anchor.set(0.5);
		text1.anchor.set(0.5);
		text3.anchor.set(0.5);

		startButton = this.add.button(820, 450, 'playBtn', function(){this.game.state.start('Game')}, this, 1, 0, 2);
		startButton.input.useHandCursor = true;
		startButton.anchor.setTo(0.5,0.5);

		backButton = this.add.button(120, 450, 'backBtn', function(){this.game.state.start('MainMenu')}, this, 1, 0, 2);
		backButton.input.useHandCursor = true;
		backButton.anchor.setTo(0.5,0.5);
	}
};
