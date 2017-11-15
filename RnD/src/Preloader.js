SaveTheMinions.Preloader = function(game) {
    this.background = null;
    this.preloadBar = null;
    this.startGame = null;
    this.coordinates = [[300,-600], [450,-100], [600,-300]]
};
SaveTheMinions.Preloader.prototype = {
    init: function(startGame) {
        this.startGame = startGame;
    },
    preload: function() {
        this.game.stage.backgroundColor = '#FFFFFF';
        this.add.sprite(0, 0, 'homePageImg');
        this.add.sprite(this.game.world.centerX, this.game.world.height-300, 'minions_looking_up');
        this.addAssets();
    },
    addAssets: function() {
            /* Images */
            this.game.load.image('background_city', 'img/min2.png');
            this.game.load.image('background_forest', 'img/background_forest.jpg');
            this.game.load.image('background_space', 'img/background_space.jpg');
            this.game.load.image('score-bg', 'img/score-bg.png');
            this.game.load.image('score-bg-minion-icon', 'img/minion-icon.png');
            this.game.load.image('score-1-points', 'img/score_1_points.png');
            this.game.load.image('score-2-points', 'img/score_2_points.png');
            this.game.load.image('score-3-points', 'img/score_3_points.png');

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
            this.game.load.image('storybg', 'img/wood1.png');
            this.game.load.image('story', 'img/story.png');
            this.game.load.image('bomb', 'img/bomb.png');

            this.game.load.image('game_title', 'img/game_title.png');



            /* Sound Effect */
            this.game.load.audio('minionSelect','sound/minionSelect.mp3');
            this.game.load.audio('menuSelect','sound/menu.wav');
            this.game.load.audio('bombSound','sound/bomb.mp3');
            this.game.load.audio('minionSound','sound/saveMinionSound.mp3');
            this.game.load.audio('pauseSound','sound/pauseSound.mp3');
            this.game.load.audio('minionSelect1','sound/clickMinion1.wav');
            this.game.load.audio('minionSelect2','sound/clickMinion2.wav');
            this.game.load.audio('minionSelect3','sound/clickMinion3.wav');
            this.game.load.audio('homePageSound','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound2','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound3','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound4','sound/GameHomePage.mp3');
            this.game.load.audio('homePageSound5','sound/GameHomePage.mp3');

            /* Sprites */
            this.game.load.spritesheet('minions_spritesheet', 'img/minions_spritesheet.png', 78.2, 90, 3);
            this.game.load.spritesheet('hunger-meter', 'img/hunger-meter.png', 289, 45);
            this.game.load.spritesheet('big_minions', 'img/big_minions_spritesheet.png', 165, 250, 3);
    },
    create: function() {
        home = this.game.add.audio('homePageSound');
        var delayInMilliseconds = 2000;
        var that = this;



        var loadingbar = this.game.add.sprite(200, this.game.world.height-50, 'loadingbar');
        var playAnimation = loadingbar.animations.add('playAnimation');
        loadingbar.animations.play('playAnimation', 7, false, true);

        home.play();

        game_obj = this.game;

        setTimeout(function() {
            for (var i = 0; i < 3; i++) {
                that.showMinions(i);
            }

            startButton = that.add.button(that.game.world.centerX, that.game.world.centerY + 50, 'continueBtn', function() {
                home.stop();
                that.game.state.start('MainMenu');
            }, this, 1, 0, 2);

            startButton.anchor.set(0.5,0.5);

            // var style = { font: "90px ComicBook", fill: "#FFD740", align: "center" };
            // var text = game_obj.add.text(470, 250, "Catch The \nMinions", style);
            // text.anchor.set(0.5);

            var game_title = game_obj.add.sprite(game_obj.world.centerX, game_obj.world.centerY - 80, 'game_title');
            game_title.anchor.set(0.5,0.5);

        }, delayInMilliseconds);


    },
    showMinions: function(minionType) {
        //Get a random item from minions and bomb spritesheet
        var rand = minionArray[Math.floor(Math.random() * minionArray.length)];


        var big_min1 = this.game.add.sprite(this.coordinates[minionType][0],
            this.coordinates[minionType][1], 'big_minions');
        big_min1.frame = minionType;
        big_min1.anchor.setTo(0.5, 0.5);

        // Add a simple bounce tween to each character's position.
        var big_tween1 = this.game.add.tween(big_min1).to({y: this.game.world.height - 140}, 2000, Phaser.Easing.Bounce.Out,
            true, 1000 + 400 * rand, 0);

        big_tween1.repeat();
    }

};
