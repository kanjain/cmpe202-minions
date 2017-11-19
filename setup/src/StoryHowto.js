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
		var howToText = this.game.add.sprite(330,0, 'how_to_text');
		var bomb = this.game.add.sprite(710,300, 'bomb');
		var badminion = this.game.add.sprite(1250,290, 'badminion_small');

		var minionIcon = this.game.add.sprite(700,110,'minions_spritesheet');
        var minionFalling = this.game.add.sprite(this.game.world.centerX + 130, 400, "minion_falling");
        this.startBounceTween(minionFalling);

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
	},
	startBounceTween : function(minionFalling) {
        var bounce = this.game.add.tween(minionFalling)
                                  .to({ y: this.game.world.height - minionFalling.height }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
        bounce.onComplete.add(this.startBounceTween, this);
        bounce.start();
    }
};
