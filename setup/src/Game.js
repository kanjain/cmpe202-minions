SaveTheMinions.Game = function(game) {
	cTime = 0;
    healthScore = 0;
	totalMinions = 0;
    health = 0;
    hungerMeter = null;
    scoreText = null;

    // state for level
    currentLvlState = new Lvl1State(this);
    lvlFrequency = 1.5;

    score = 0;//global score
	transportation = null;
	minionArray = ['Dave','Tim','Jerry','BadMinion'];
    eventOne = "addOne";
    eventTwo = "addTwo";
    eventThree = "addThree";

	// define observer
	onScoreChange = null;
	onHealthChange = null;

    var minionSelect1 = null
    var minionSelect2 = null
    var minionSelect3 = null
    var minionSound = null;
    var bombSound = null;
    var pauseSound = null;

};
SaveTheMinions.Game.prototype = {
	create: function() {
        // physic global setup
        this.game.physics.startSystem(Phaser.Physics.ARCANE);
        this.game.physics.arcade.gravity.y = 500;
        // Adding Sound
        minionSelect1 =this.game.add.audio('minionSelect1');
        minionSelect2 =this.game.add.audio('minionSelect2');
        minionSelect3 =this.game.add.audio('minionSelect3');
        minionSound =this.game.add.audio('minionSound');
        bombSound= this.game.add.audio('bombSound');
        pauseSound= this.game.add.audio('pauseSound');

        //  Background image for our game.
        if (this.game.theme == "forest"){
            this.game.add.sprite(0, 0, 'background_forest');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 443, 'truck');
        }
        else if (this.game.theme == "city"){
            this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 443, 'truck');
        }
        else if (this.game.theme == "space"){
            this.game.add.sprite(0, 0, 'background_space');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(60, 470, 'spaceship');
        }
        else {
            this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 443, 'truck');
        }

        transportation.anchor.setTo(0.5, 0.5);

        // Adding the pause button to pause the game.
        pauseButton = this.add.button(608, 40, 'pauseBtn', function(){console.log('Game Paused!!!')}, this, 1, 0, 2);
		pauseButton.input.useHandCursor = true;
		pauseButton.anchor.setTo(0.5,0.5);

		pauseButton.inputEnabled = true;

    	currentGame = this.game;

    	pauseButton.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
            pauseSound.play();
        	currentGame.paused = true;
    	});

    	this.game.input.onDown.add(function(){
            if (currentGame.paused) {
                console.log('Game Resumed!!!')
                pauseSound.play();
                currentGame.paused = false;
            }
    	});

        // transportation.anchor.setTo(0.5,0.5);


        // add group
        flyingMinions = this.game.add.group();

        // instantiate the observer
        onScoreChange = new Observer();
        onHealthChange = new Observer();
        // subscribe to a subject
        onScoreChange.subscribe(this.updateScore);
        onHealthChange.subscribe(this.updateHealth);

        // add score background
        score = 0; // reset the score on create.
        this.game.add.sprite(10, 10, 'score-bg');
        this.game.add.sprite(13, 13, 'score-bg-minion-icon');
        scoreText = this.game.add.text(150, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });

        // add health meter
        health = 25; //reset the health meter on create.
        hungerMeter = this.add.sprite(635, 20, 'hunger-meter');
        for(var h = 0; h < 25; h++) {
            hungerMeter.animations.add(''+(25 - h), [h], 10, true);
        }
        hungerMeter.animations.play('25');


    },

	update: function() {

        if(health == 0) {
						this.game.displayscore=score;
            this.game.state.start('EndOfGame');
        }
        // For lvl change. For now it is only going from 1-2-3-4 and the frequency of minion and bomb changes
        if (currentLvlState instanceof Lvl1State && score >= 1 && score <= 3) {currentLvlState.changeState();}
        else if (currentLvlState instanceof Lvl2State && score >= 4 && score <= 6) {
            currentLvlState.changeState();

        }
        else if (currentLvlState instanceof Lvl3State && score >= 7 && score <= 9) {currentLvlState.changeState();}
        else if (currentLvlState instanceof Lvl4State && score >= 10 && score <= 12) {currentLvlState.changeState();}
        this.updateLogic();
    },
	render: function() {
        // don't do anything in here please this is for debug only
    },

    /*----------These are added function prototype for game logic------------*/
	updateScore: function(event) {
	    var scoreIncrement = 0;
		if (event === eventOne) {
		    scoreIncrement = 1;
		}
		if (event === eventTwo) {
		    scoreIncrement = 2;
		}
		if (event === eventThree) {
            scoreIncrement = 3;
		}

		score += scoreIncrement;
        scoreText.setText(score);
	},

    changeLvlState: function(lvlState, freq) {

        currentLvlState = lvlState;
        lvlFrequency = freq;
    },


	updateHealth: function(event) {
	    // hard-code gradually decrement health
	    // no weighted penalty.
        health -= 1;
        hungerMeter.animations.play('' +  health);
	},
    selectt: function(sprite) {
        if(sprite.name == "BadMinion") {
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
            onScoreChange.notify(eventName);
        }
    },

    updateLogic: function () {
        if (this.game.time.totalElapsedSeconds() - cTime >= this.game.rnd.realInRange(lvlFrequency, 6.0)){
			cTime = this.game.time.totalElapsedSeconds();

			// Get a random item from minions and bomb spritesheet
			var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

			// Create an object of a specific type using Factory method.
            minionFactoryObj = new MinionFactory();
            minion = minionFactoryObj.createMinions(this.game, rand, currentLvlState);

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
                    onHealthChange.notify(eventOne);
                }
            }
        });
    }
};
