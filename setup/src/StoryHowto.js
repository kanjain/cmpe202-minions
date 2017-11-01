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
		this.game.add.sprite(100, 100, 'story');
		//this.game.add.sprite(0, 0, 'screen-story');
		this.state = 'story';

		startButton = this.add.button(320, 400, 'playBtn', function(){this.game.state.start('Game')}, this, 1, 0, 2);
		startButton.input.useHandCursor = true;
		startButton.anchor.setTo(0.5,0.5);

		backButton = this.add.button(320, 500, 'backBtn', function(){this.game.state.start('MainMenu')}, this, 1, 0, 2);
		backButton.input.useHandCursor = true;
		backButton.anchor.setTo(0.5,0.5);
	}
};
