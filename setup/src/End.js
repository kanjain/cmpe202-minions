SaveTheMinions.EndOfGame = function(game) {
	buttonContinue = null;
	state = null;
};
SaveTheMinions.EndOfGame.prototype = {
	create: function() {
		this.showEndScreen();
	},
	showEndScreen: function() {
	    var score = this.game.displayscore;
		var background = this.game.add.sprite(0, 0, 'minion_end_game');
		var gameOverImage = this.game.add.sprite(650,75,'minion_game_over');
		var health = 25;

		background.tint = 0xF234234;
        this.game.add.sprite(10, 10, 'score-bg');
        this.game.add.sprite(13, 13, 'score-bg-minion-icon');
        scoreText = this.game.add.text(150, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });
        scoreText.setText(score);

		tryAgainButton = this.add.button(450, 350, 'restartButton', function(){this.game.state.start('Game');}, this, 1, 0, 2);
		tryAgainButton.input.useHandCursor = true;
		tryAgainButton.anchor.setTo(0.5,0.5);

		backToMainButton = this.add.button(1100, 350, 'backToMainButton', function(){this.game.state.start('MainMenu');}, this, 1, 0, 2);
		backToMainButton.input.useHandCursor = true;
		backToMainButton.anchor.setTo(0.5,0.5);
	}
};
