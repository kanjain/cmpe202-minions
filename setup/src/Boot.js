var SaveTheMinions = {};
SaveTheMinions.Boot = function(game){};
SaveTheMinions.Boot.prototype = {
	preload: function() {
	    // preload the loading indicator first before anything else
		this.game.load.image('preloaderBar', 'img/loading.png');
	},
	create: function(){
		this.game.input.maxPointers = 1;
		// this.game.stage.disablePauseScreen = true;
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.stage.disableVisibilityChange = true;
		this.game.stage.scale.forcePortrait = true;
		this.game.stage.scale.pageAlignHorizontally = true;
		//this.game.scale.setScreenSize(true);
		this.game.state.start('Preloader');
	}
};
