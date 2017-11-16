SaveTheMinions.StoryHowto = function(game) {
	buttonContinue = null;
	state = null;
};
SaveTheMinions.StoryHowto.prototype = {
	create: function() {
		this.showStory();
		this.state = 'story';
	},
	showStory: function() {
		var background = this.game.add.sprite(0, 0, 'main_menu_background');
		background.tint = 0xFFFFBF;
		var howToText = this.game.add.sprite(250,0, 'how_to_text');
		var bomb = this.game.add.sprite(750,275, 'bomb');
		var minionIcon = this.game.add.sprite(650,150,'minions_spritesheet');
		var minionIcon = this.game.add.sprite(720,400,'minion_falling');

		playButton = this.add.button(800, 640, 'playBtn', function(){this.game.state.start('Game')}, this, 1, 0, 2);
		playButton.input.useHandCursor = true;
		playButton.anchor.setTo(0.5,0.5);

		backButton = this.add.button(650, 640, 'backBtn', function(){this.game.state.start('MainMenu')}, this, 1, 0, 2);
		backButton.input.useHandCursor = true;
		backButton.anchor.setTo(0.5,0.5);

		var buttonInterval = setInterval(function() {
		    if (playButton.x < 1200) {
		        playButton.x += 20;
            }

            if (backButton.x > 300) {
		        backButton.x -= 20;
		    }
		}, 100);
	}
};
