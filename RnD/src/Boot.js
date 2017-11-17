var SaveTheMinions = {};
SaveTheMinions.Boot = function(game){};
SaveTheMinions.Boot.prototype = {
	preload: function() {
	    // preload the loading indicator first before anything else
		this.game.load.spritesheet('loadingbar', 'img/loadingbar-sprite.png', 400, 40, 11);
		
		intro_bg = this.game.load.image('homePageImg', 'img/intro_screen_bg.jpg');

		this.game.load.image('minions_looking_up', 'img/minions_looking_up.png');
		
		console.log("World width = " + this.game.world.width);
		console.log("World height = " + this.game.world.height);
	},
	create: function(){
		this.game.input.maxPointers = 1;
		// this.game.stage.disablePauseScreen = true;
		//this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.disableVisibilityChange = true;
		//this.game.stage.scale.forcePortrait = true;
		//this.game.stage.scale.pageAlignHorizontally = true;
		//this.game.stage.scale.setScreenSize(true);
		this.game.state.start('Preloader');


		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        //this.game.scale.forceLandscape = true;
        //this.game.scale.setScreenSize = true;
	}
};
