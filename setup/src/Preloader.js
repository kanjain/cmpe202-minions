SaveTheMinions.Preloader = function(game) {
    this.background = null;
    this.preloadBar = null;
    this.startGame = null;
};
SaveTheMinions.Preloader.prototype = {
    init: function(startGame) {
        this.startGame = startGame;
    },
    preload: function() {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.add.sprite(0, 0, 'homePageImg');
        //this.preloadBar = this.add.sprite(this.game.world.centerX, 450, 'preloaderBar');
        //this.load.setPreloadSprite(this.preloadBar);
        this.addAssets();
    },
    addAssets: function() {
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
            this.game.load.image('continueBtn', 'img/btn_continue.png');
            this.game.load.image('truck', 'img/truck.png');
            this.game.load.image('spaceship', 'img/spaceship.png');
            this.game.load.image('howToBtn','img/btn_how_to.png');
            this.game.load.image('loading', 'img/loading.png');
            this.game.load.image('story', 'img/story.png');
            this.game.load.image('bomb', 'img/bomb.png');

            /* Sound Effect */
            this.game.load.audio('minionSelect','sound/minionSelect.mp3');
            this.game.load.audio('menuSelect','sound/menu.wav');
            this.game.load.audio('bombSound','sound/bomb.mp3');
            this.game.load.audio('minionSound','sound/saveMinionSound.mp3');
            this.game.load.audio('pauseSound','sound/pauseSound.mp3');
            this.game.load.audio('minionSelect1','sound/clickMinion1.wav');
            this.game.load.audio('minionSelect2','sound/clickMinion2.wav');
            this.game.load.audio('minionSelect3','sound/clickMinion3.wav');
            this.game.load.audio('homePageSound1','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound2','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound3','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound4','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound5','sound/GameHomePage.mp3');

            /* Sprites */
            this.game.load.spritesheet('minions_spritesheet', 'img/minions_spritesheet.png', 78.2, 90, 3);
            this.game.load.spritesheet('hunger-meter', 'img/hunger-meter.png', 289, 45);
    },
    create: function() {
        home = this.game.add.audio('homePageSound1');

        //Get a random item from minions and bomb spritesheet
        var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

        var min1 = this.game.add.sprite(this.game.world.centerX - 30, -600, 'minions_spritesheet');
        min1.frame = 0;
        min1.anchor.setTo(0.5, 0.5);
            
        // Add a simple bounce tween to each character's position.
        var tween1 = this.game.add.tween(min1).to({y: this.game.world.centerY + 125}, 2000, Phaser.Easing.Bounce.Out,
            true, 1000 + 400 * rand, 0);


        var min2 = this.game.add.sprite(this.game.world.centerX - 70, -100, 'minions_spritesheet');
        min2.frame = 1;
        min2.anchor.setTo(0.5, 0.5);

            tween1.repeat();

        // Add a simple bounce tween to each character's position.
        var tween2 = this.game.add.tween(min2).to({y: this.game.world.centerY + 125}, 2000, Phaser.Easing.Bounce.Out,
            true, 1000 + 400 * rand, 0);


        var min3 = this.game.add.sprite(this.game.world.centerX + 200, -300, 'minions_spritesheet');
        min3.frame = 2;
        min3.anchor.setTo(0.5, 0.5);

        tween2.repeat();

        // Add a simple bounce tween to each character's position.
        var tween3 = this.game.add.tween(min3).to({y: this.game.world.centerY + 125}, 2000, Phaser.Easing.Bounce.Out,
            true, 1000 + 400 * rand, 0);

        tween3.repeat();

        home.play();

        startButton = this.add.button(this.game.world.centerX + 100, 10, 'continueBtn', function() {
            home.stop();
            this.game.state.start('MainMenu');
        }, this, 1, 0, 2);

    }
};
