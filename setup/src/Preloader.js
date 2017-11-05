SaveTheMinions.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
};
SaveTheMinions.Preloader.prototype = {
	preload: function() {
	this.game.stage.backgroundColor = '#000000';

    // DO NOT SHOW "Loading..."
	//this.preloadBar = this.add.sprite((640-311)/2, (960-27)/2, 'preloaderBar');
	//this.load.setPreloadSprite(this.preloadBar);

    /* Images */
    this.game.load.image('background_city', 'img/min2.png');
    this.game.load.image('background_forest', 'img/background_forest.jpg');
    this.game.load.image('background_space', 'img/background_space.jpg');
    this.game.load.image('score-bg', 'img/score-bg.png');
    this.game.load.image('score-bg-minion-icon', 'img/minion-icon.png');

    this.game.load.image('levelBtn', 'img/btn_select_level.png');
    this.game.load.image('backBtn', 'img/btn_back.png');
	this.game.load.image('playBtn', 'img/btn_play.png');
	this.game.load.image('pauseBtn', 'img/btn_pause.png');
	this.game.load.image('moderate', 'img/btn_moderate.png');
	this.game.load.image('hard', 'img/btn_hard.png');
	this.game.load.image('truck', 'img/truck.png');
	this.game.load.image('spaceship', 'img/spaceship.png');
	this.game.load.image('howToBtn','img/btn_how_to.png');
	this.game.load.image('loading', 'img/loading.png');
	this.game.load.image('story', 'img/story.png');
	this.game.load.image('bomb', 'img/bomb.png');

	/* Fonts */
    this.game.load.text('font-ttf', 'fonts/comicbook.ttf');
    this.game.load.text('font-svg', 'fonts/comicbook.svg');
    this.game.load.text('font-ttf', 'fonts/comicbook.ttf');
    this.game.load.text('font-woff', 'fonts/comicbook.woff');

	/*Sound Effect*/
	this.game.load.audio('minionSelect','sound/minionSelect.mp3');
	this.game.load.audio('menuSelect','sound/menu.wav');
	this.game.load.audio('bombSound','sound/bomb.mp3');
	this.game.load.audio('minionSound','sound/saveMinionSound.mp3');
	this.game.load.audio('pauseSound','sound/pauseSound.mp3');

        /* Sprites */
	this.game.load.spritesheet('minions_spritesheet', 'img/minions_spritesheet.png', 78.2, 90, 3);
	this.game.load.spritesheet('hunger-meter', 'img/hunger-meter.png', 289, 45);

	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
