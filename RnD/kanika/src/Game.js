Minion.Game = function(game) {
	player = null;
	hungerMeter = null;
	scoreText = null;
	pauseButton = null;
	gamePaused = false;
	gameOver = false;
	runOnce = false;
	pauseButtonDisabled = false;
	score = 0;
	health = 0;
};
Minion.Game.prototype = {
	create: function() {
		gamePaused = false;
		gameOver = false;
		pauseButtonDisabled = false;
		score = 0;
		health = 0;
		runOnce = false;

        this.add.sprite(0, 0, 'background');
        this.add.sprite(10, 10, 'score-bg');

        pausedScreen = this.add.sprite(0, 0, 'screen-overlay');
        pausedScreenText = this.add.sprite((640-430)/2, 210, 'text-paused');
        //gameOverText = this.add.sprite((640-594)/2, 210, 'text-gameover');
        newHighscoreText = this.add.sprite(30, 75, 'text-newbestscore');
        pausedScreen.visible = false;
        pausedScreenText.visible = false;
        //gameOverText.visible = false;
        newHighscoreText.visible = false;
        backButton = this.add.button((640-358)/2, 960-133-110, 'button-back', function(){this.game.state.start('MainMenu');}, this, 1, 0, 2);
        continueButton = this.add.button((640-358)/2, 960-133-290, 'button-continue', function(){pauseButtonDisabled = false;this.managePause();}, this, 1, 0, 2);
        restartButton = this.add.button((640-358)/2, 960-133-290, 'button-restart', function(){this.game.state.start('Game')}, this, 1, 0, 2);
        backButton.visible = false;
        continueButton.visible = false;
        restartButton.visible = false;

		minionButton = this.add.button(640-500-50, 100, 'button-minion', this.minionClick, this);
		gru = this.add.button(640-300-0, 100, 'button-gru', this.gruClick, this);;

		health = 25;
        hungerMeter = this.add.sprite(235, 20, 'hunger-meter');

        for(var h=0; h<25; h++) {
        	hungerMeter.animations.add(''+(25-h), [h], 10, true);
        }

		hungerMeter.animations.play('25');

		scoreText = this.game.add.text(120, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });
	},
	minionClick: function() {
		score += 1;
		scoreText.setText(score);
	},
	gruClick: function() {
		health -= 2;
		hungerMeter.animations.play(''+health);
	},
	managePause: function() {
	},
	update: function() {
		if(gameOver) {
			if(!runOnce) {
				console.log('run once');
				runOnce = true;

				hungerMeter.animations.play('1');
				backButton.visible = true;
				backButton.bringToTop();
				restartButton.visible = true;
				restartButton.bringToTop();
			}
		}
		else if(!gamePaused) {
			if(health <= 0) {
				gameOver = true;
			}
		}
	},
	render: function() {
	}
};