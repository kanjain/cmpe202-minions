SaveTheMinions.Game = function(game) {
	cTime = 0;
    healthScore = 0;
	totalMinions = 0;
    health = 0;
    hungerMeter = null;
    scoreText = null;

	minionArray = ['Dave','Tim','Jerry'];
    // state for level
    currentLvlState = new Lvl1State(this);
    lvlFrequency = 1.5;

    score = 0;//global score
	transportation = null;
	minionArray = ['Dave','Tim','Jerry','Bomb'];
    eventOne = "addOne";
    eventTwo = "addTwo";
    eventThree = "addThree";

	// define observer
	onScoreChange = null;
	onHealthChange = null;

    var minionSelect = null;
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
        minionSelect =this.game.add.audio('minionSelect');
        minionSound =this.game.add.audio('minionSound');
        bombSound= this.game.add.audio('bombSound');
        pauseSound= this.game.add.audio('pauseSound');

        //  Background image for our game.
        if (this.game.theme == "forest"){
            this.game.add.sprite(0, 0, 'background_forest');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 608, 'truck');
        }
        else if (this.game.theme == "city"){
            this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 608, 'truck');
        }
        else if (this.game.theme == "space"){
            this.game.add.sprite(0, 0, 'background_space');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(60, 628, 'spaceship');
        }
        else {
            this.game.add.sprite(0, 0, 'background_city');
            // Adding a new transportation object to save the minions.
            transportation = this.game.add.sprite(100, 608, 'truck');
        }


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
    		console.log('Game Resumed!!!')
            pauseSound.play();
    		currentGame.paused = false;
    	});

        transportation.anchor.setTo(0.5,0.5);
        // add group
        flyingMinions = this.game.add.group();

        // instantiate the observer
        onScoreChange = new Observer();
        onHealthChange = new Observer();
        // subscribe to a subject
        onScoreChange.subscribe(this.updateScore);
        onHealthChange.subscribe(this.updateHealth);

        // add score background
        this.game.add.sprite(10, 10, 'score-bg');
        this.game.add.sprite(13, 13, 'score-bg-minion-icon');
        scoreText = this.game.add.text(150, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });

        // add health meter
        health = 25;
        hungerMeter = this.add.sprite(635, 20, 'hunger-meter');
        for(var h = 0; h < 25; h++) {
            hungerMeter.animations.add(''+(25 - h), [h], 10, true);
        }
        hungerMeter.animations.play('25');
    },
    
	update: function() {

        // add ball randomly between 0-15 sec
        
        if (currentLvlState instanceof Lvl1State && score == 1) {currentLvlState.changeState();}
        else if (currentLvlState instanceof Lvl2State && score == 2) {currentLvlState.changeState();}
        else if (currentLvlState instanceof Lvl3State && score == 3) {currentLvlState.changeState();}
        else if (currentLvlState instanceof Lvl4State && score == 4) {currentLvlState.changeState();}

	    if (this.game.time.totalElapsedSeconds() - cTime >= this.game.rnd.realInRange(lvlFrequency, 6.0)){	        
            
			cTime = this.game.time.totalElapsedSeconds();

			// Get a random item from minions and bomb spritesheet
			var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

			// Create an object of a specific type using Factory method.
			minionFactoryObj = new MinionFactory();
			minion = minionFactoryObj.createMinions(this.game, rand).minion;

			// add event action when you click on the minion. I might have this selectt function moving to Minion class to make this cleaner
			minion.events.onInputDown.add(this.selectt, minion);
			flyingMinions.add(minion);
            totalMinions++;
        }

		// destroy object after it drop to bottom
	    flyingMinions.forEach(function(sprite){
	        if(sprite.y >=500){
	            sprite.destroy();
	            if (sprite.score != -1 && sprite.score != 1000) {
	                onHealthChange.notify(eventOne);
	            }
			}
	    });

        totalMinions++;
    },
	render: function() {
        if(health == 0) {
            this.game.state.start('MainMenu');
        }
	},
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
    selectt: function(sprite){
        if(sprite.name == "Bomb") {
            bombSound.play();
            this.game.state.start('MainMenu');
         // OR a minion selected...
        } else {
            minionSelect.play();
            this.game.physics.arcade.moveToObject(sprite, transportation, 0, 50);
            sprite.lifespan = 55;
            sprite.score = 1000;

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
            onScoreChange.notify(eventName);
        }
    }

};


var Lvl1State = function (game) {
    this.game = game;
    this.changeState = function () {
        console.log('lvl2');
        this.game.changeLvlState(new Lvl2State(this.game), 1.5);
        
    }
    
}

var Lvl2State = function (game) {
    this.game = game;
    this.changeState = function () {
        console.log('lvl3');
        this.game.changeLvlState(new Lvl3State(game), 1);

    }
    
}

var Lvl3State = function (game) {
    this.game = game;
    this.changeState = function () {
        console.log('lvl4');
        this.game.changeLvlState(new Lvl4State(game), 0.5);
        
    }
    
}

var Lvl4State = function (game) {
    this.game = game;
    this.changeState = function () {
        console.log('lvl1');
        this.game.changeLvlState(new Lvl1State(game), 0);
        
    }

}