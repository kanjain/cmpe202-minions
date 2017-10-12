Minion.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
};
Minion.Preloader.prototype = {
	preload: function() {
		this.preloadBar = this.add.sprite((640-311)/2, (960-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		this.load.spritesheet('button-start', 'img/button-start.jpg', 401, 143);
		this.load.image('screen-story', 'img/screen-story.jpg');
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
