SaveTheMinions.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
};
SaveTheMinions.Preloader.prototype = {
	preload: function() {
		this.game.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((640-311)/2, (960-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.game.load.image('sjsu', 'img/sjsu.png');
		this.game.load.image('playBtn', 'img/btn_play.png');
	    this.game.load.image('howToBtn','img/btn_how_to.png');
	    this.game.load.image('loading', 'img/loading.png');
			this.game.load.image('story', 'img/story.png');
	    this.game.load.spritesheet('minions_spritesheet', 'img/minions_spritesheet.png', 78.2, 90, 3);

		},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
