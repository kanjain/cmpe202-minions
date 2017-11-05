SaveTheMinions.Game = function(game) {
	cTime = 0;
    healthScore = 0;
	totalMinions = 0;
	consecutiveCount = 0;
	scoreIncrement = 1;
    score = 0;
    health = 0;
    hungerMeter = null;
    scoreText = null;
    
	transportation = null;
	minionArray = ['Dave','Tim','Jerry'];
    // state for level
    currentLvlState = new Lvl1State(this);
    lvlFrequency = 1.5;
	// define observer
	onScoreChange = null;
};
SaveTheMinions.Game.prototype = {
	create: function() {
        score = 0;
        health = 0;

        // physic global setup
        this.game.physics.startSystem(Phaser.Physics.ARCANE);
        this.game.physics.arcade.gravity.y = 500;

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

        transportation.anchor.setTo(0.5,0.5);
        // add group
        flyingMinions = this.game.add.group();

        // instantiate the observer
        onScoreChange = new Observer();
        // subscribe to a subject
        onScoreChange.subscribe(this.updateScore);


        // add score background
        this.game.add.sprite(10, 10, 'score-bg');
        this.game.add.sprite(13, 13, 'score-bg-minion-icon');
        health = 25;
        hungerMeter = this.add.sprite(635, 20, 'hunger-meter');

        for(var h = 0; h < 25; h++) {
            hungerMeter.animations.add(''+(25 - h), [h], 10, true);
        }

        hungerMeter.animations.play('25');

        scoreText = this.game.add.text(150, 20, "0", { font: "40px ComicBook", fill: "#FFCC00", align: "right" });
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
	        if(sprite.y >=605){
	            sprite.destroy();
                consecutiveCount = 0;
                scoreIncrement = 1;
	            healthScore++;
			}

	    });
	},
	render: function() {
	    health -= healthScore;
        hungerMeter.animations.play(''+health);
		this.decorateScore();
	},
    decorateScore: function() {
        if(consecutiveCount > 2 && consecutiveCount < 4 ) {
            scoreIncrement = 2 * scoreIncrement;
        }

        if(consecutiveCount > 4 && consecutiveCount < 8) {
            scoreIncrement = 2 * scoreIncrement;
        }
    },
	updateScore: function(event) {
		if (event === 'addOne') {
			score += scoreIncrement;
			consecutiveCount+=1;
			scoreText.setText(score);
		}
	},
	selectt: function(sprite){
		this.game.physics.arcade.moveToObject(sprite, transportation, 0, 50);
		sprite.lifespan = 55;
		onScoreChange.notify('addOne');
    },
    
    changeLvlState: function(lvlState, freq) {
        
        currentLvlState = lvlState;
        lvlFrequency = freq;
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