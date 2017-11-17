var SaveTheMinions = {};
SaveTheMinions.Boot = function(game){};
SaveTheMinions.Boot.prototype = {
	preload: function() {
	    // preload the loading indicator first before anything else
		this.game.load.spritesheet('loadingbar', 'img/loadingbar-sprite.png', 400, 40, 11);
		this.game.load.image('homePageImg', 'img/intro_screen_bg.jpg');

		// Image showing minions looking up
		this.game.load.image('minions_looking_up', 'img/minions_looking_up.png');
	},
	create: function(){
		this.game.input.maxPointers = 1;

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
      
        this.game.scale.setScreenSize = true;
        this.game.scale.refresh();
        this.game.state.start('Preloader');  
	}
};
