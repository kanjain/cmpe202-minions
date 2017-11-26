SaveTheMinions.Game = function(game) {
	cTime = 0;
    healthScore = 0;
	totalMinions = 0;
    health = 0;
    hungerMeter = null;
    scoreText = null;
    pauseButtonDisabled = false;
    background = {};
    pausedImageSprite = null;
    
    // state for level
    this.lvlTime = 0;
    this.currentLvlState = null;
    this.lvlFrequency = 1.3;
    continousMinion =0;
    score = 0;//global score
	transportation = null;
	this.minionArray = ['Dave','Tim','Jerry','Bomb'];
    eventOne = "addOne";
    eventTwo = "addTwo";
    eventThree = "addThree";

	// define observer
	scoreBarObserver = null;
	healthBarObserver = null;
    onLevelUp=null;
    // Decorator Variables
    continousClick =0;
    continousClickLimit=3;
    decoratedValue =2;

    var minionSelect1 = null
    var minionSelect2 = null
    var minionSelect3 = null
    var minionSound = null;
    var bombSound = null;
    var pauseSound = null;

};

SaveTheMinions.Game.prototype = {
	create: function() {
        this.currentLvlState = new Lvl1State(this);
        // time to level up
        this.lvlTime = this.game.time.totalElapsedSeconds();
	    //background = {};
	    pausedImageSprite = null;
	    pauseButtonDisabled = false;

        // physic global setup
        this.game.physics.startSystem(Phaser.Physics.ARCANE);
        this.game.physics.arcade.gravity.y = 500;
        // Adding Sound
        minionSelect1 = this.game.add.audio('minionSelect1');
        minionSelect2 = this.game.add.audio('minionSelect2');
        minionSelect3 = this.game.add.audio('minionSelect3');
        minionSound = this.game.add.audio('minionSound');
        bombSound = this.game.add.audio('bombSound');
        pauseSound = this.game.add.audio('pauseSound');
        backGroundSound = this.game.add.audio('backGroundSound');
        backGroundSound.loopFull(0.2);

        //  Background image for our game.
        if (this.game.theme == "forest"){
            this.background = this.game.add.sprite(0, 0, 'background_forest');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(this.game.world.centerX, this.game.world.height - 100, 'woodencart');
        }
        else if (this.game.theme == "city"){
            this.background = this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, this.game.world.height - 100, 'ship');
        }
        else if (this.game.theme == "space"){
            this.background = this.game.add.sprite(0, 0, 'background_space');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(this.game.world.centerX, 150, 'spaceship');
        }
        else {
            this.background = this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(300, this.game.world.height - 100, 'ship');
        }

        transportation.anchor.setTo(0.5, 0.5);

        // Adding the pause button to pause the game.
        pauseButton = this.add.button(this.game.world.width - 350, 20, 'pauseBtn', this.managePause, this);
		pauseButton.input.useHandCursor = true;

		//Adding the exit/quit/bail button to abort the game.
		exitButton = this.add.button(this.game.world.width - 400, 20, 'exitBtn', function(){this.game.state.start('MainMenu');}, this);
        exitButton.input.useHandCursor = true;

        pausedImageSprite = this.game.add.sprite(400,180, 'paused');
        pausedImageSprite.visible = false;

        // add group
        flyingMinions = this.game.add.group();

        // instantiate the observer
        scoreBarObserver = new ScoreBarObserver(this.game);
        healthBarObserver = new HealthBarObserver(this.game);
        onLevelUp = new Observer();
        // subscribe to a subject
        scoreBarObserver.subscribe(this.updateScore, this);
        healthBarObserver.subscribe(this.updateHealth, this);
        onLevelUp.subscribe(this.changeEnvironment, this);

        // add score background
        score = 0; // reset the score on create.
        this.game.add.sprite(10, 10, 'score-bg');
        this.game.add.sprite(13, 13, 'score-bg-minion-icon');
        scoreText = this.game.add.text(150, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });

        // add health meter
        health = 25; //reset the health meter on create.
        hungerMeter = this.add.sprite(this.game.world.width-300, 20, 'hunger-meter');
        for(var h = 0; h < 25; h++) {
            hungerMeter.animations.add(''+(25 - h), [h], 10, true);
        }
        hungerMeter.animations.play('25');
    },

	update: function() {
        var elapTime = this.game.time.totalElapsedSeconds() - this.lvlTime;
        if(health == 0) {
            this.game.displayscore = score;
            this.game.state.start('EndOfGame');
        }
        // For lvl change. For now it is only going from 1-2-3-4 and the frequency of minion and bomb changes
        if (this.currentLvlState instanceof Lvl1State && elapTime >= 5) {this.currentLvlState.changeState();}
        else if (this.currentLvlState instanceof Lvl2State && elapTime >= 10) {this.currentLvlState.changeState();}
        else if (this.currentLvlState instanceof Lvl3State && elapTime >= 15) {this.currentLvlState.changeState();}
        this.updateLogic();
    },
	render: function() {
        // don't do anything in here please this is for debug only
    },

    /*----------These are added function prototype for game logic------------*/
	updateScore: function(event) {
        if (this.game.paused === true) return;
			var sc = new ScoreChange();
            var decorated = new ScoreChangeDecorator();
            score+= decorated.decorateScoreChange(sc,event,continousClick,continousClickLimit,decoratedValue);
            console.log(score);
            scoreText.setText(score);
			if(score >= 30 && score < 37)
				onLevelUp.notify(this);
    },

    changeEnvironment: function(el){
		//background = el.game.add.sprite(0, 0, 'background_forest');
		// Adding a new transportation object to save the minions.
		//transportation = el.game.add.sprite(el.game.world.centerX, el.game.world.height - 100, 'woodencart');
		el.game.score=score;

		el.game.state.start('LevelUp');
	},
    updateHealth: function(event) {
        if (this.game.paused === true) return;
        // hard-code gradually decrement health
        // no weighted penalty.
        health -= 1;
        hungerMeter.animations.play('' +  health);
    },

    changeLvlState: function(lvlState, freq) {
        
        this.currentLvlState = lvlState;
        this.lvlFrequency = freq;
    },

    managePause:  function() {
        if(!pauseButtonDisabled) {
            if(this.game.paused == false) {
                console.log('Game Paused!!!');
                pauseSound.play();
                background.tint = 0xFD9731;
                pausedImageSprite.visible = true;
            } else {
                console.log('Game Resumed!!!');
                pauseSound.play();

                background.tint = 0xFFFFFF;
                pausedImageSprite.visible = false;
            }
            this.game.paused = !this.game.paused;
        }
    },

    selectt: function(sprite) {
        if (this.game.paused == true) return;
        if(sprite.name == "Bomb") {
					 continousClick = 0;
            bombSound.play();
            this.game.displayscore = score;
            this.game.state.start('EndOfGame');
         // OR a minion selected...
        } else {
            // Get the current sprite position
            var spriteX = sprite.world.x;
            var spriteY = sprite.world.y;
            var scoreMinion = null;

            if(sprite.name == "Dave") {
                minionSelect1.play();
                scoreMinion = this.game.add.sprite(spriteX, spriteY, 'score-1-points');
            }
            if(sprite.name == "Jerry") {
                minionSelect3.play();
                scoreMinion = this.game.add.sprite(spriteX, spriteY, 'score-2-points');
            }
            if(sprite.name == "Tim") {
                minionSelect2.play();
                scoreMinion = this.game.add.sprite(spriteX, spriteY, 'score-3-points');
            }

            var playAnimation = scoreMinion.animations.add('playAnimation');
            scoreMinion.anchor.setTo(0.5, 0.5);
            scoreMinion.alpha = 0;
            this.game.add.tween(scoreMinion).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None , true, 0, 0, true);

            this.game.physics.arcade.moveToObject(sprite, transportation, 0, 50);
            sprite.lifespan = 55;

            // Notify of a score change.
            var eventName = "";
            switch(sprite.score) {
                case 2:
                    eventName = eventTwo;
                    break;
                case 3:
                    eventName = eventThree;
                    break;
                default:
                    eventName = eventOne;
                    break;
            }

            sprite.scored = true;
            scoreBarObserver.notify(eventName, this);
        }
    },

    updateLogic: function () {
        var that = this;
        if (this.game.time.totalElapsedSeconds() - cTime >= this.game.rnd.realInRange(this.lvlFrequency, 6.0)){
			cTime = this.game.time.totalElapsedSeconds();

			// Get a random item from minions and bomb spritesheet
			var rand = this.minionArray[Math.floor(Math.random() * this.minionArray.length)];

			// Create an object of a specific type using Factory method.
            minionFactoryObj = new MinionFactory();
            minion = minionFactoryObj.createMinions(this.game, rand, this.currentLvlState);
            
			// add event action when you click on the minion. I might have this selectt function moving to Minion class to make this cleaner
            minion.events.onInputDown.add(this.selectt, minion);
            minion.rotateMe = (Math.random()*8)-4;
			flyingMinions.add(minion);
            totalMinions++;
        }

        // destroy object after it drop to bottom
        flyingMinions.forEach(function (sprite) {
            // Adding rotation to the minions and bombs.
            sprite.angle += sprite.rotateMe;

            if (sprite.y >= 500) {
                sprite.destroy();
                // Decrease health.
                if (sprite.score != -1 && // not when it is a bomb.
                // not when you scored a point.
                !sprite.scored) {
									continousClick =0;
                    healthBarObserver.notify(eventOne, that);
                }
								if (sprite.score != -1 && // not when it is a bomb.
                    // not when you scored a point.
                    sprite.scored) {
                    continousClick +=1;
                }

            }
        });
    }
};
