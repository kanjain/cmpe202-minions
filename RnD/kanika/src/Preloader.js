Minion.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
};
Minion.Preloader.prototype = {
	preload: function() {
		this.game.stage.backgroundColor = '#B4D9E7';

		this.load.image('background', 'img/background-2.jpg');
		this.load.image('score-bg', 'img/score-bg.png');
		this.load.image('button-minion', 'img/minion-icon.png');
		this.load.image('button-gru', 'img/gruImage.png');	

		this.load.text('font-ttf', 'fonts/comicbook.ttf');
		this.load.text('font-svg', 'fonts/comicbook.svg');
		this.load.text('font-ttf', 'fonts/comicbook.ttf');
		this.load.text('font-woff', 'fonts/comicbook.woff');

		this.load.spritesheet('hunger-meter', 'img/hunger-meter.png', 289, 45);
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
		this.load.spritesheet('button-continue', 'img/button-continue.png', 358, 133);
		this.load.spritesheet('button-back', 'img/button-back.png', 358, 133);
		this.load.spritesheet('button-restart', 'img/button-restart.png', 363, 131);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};