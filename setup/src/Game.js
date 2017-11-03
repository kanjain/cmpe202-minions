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
	minionArray = ['Dave','Tim','Jerry','Bomb'];

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


        // Adding the pause button to pause the game.
        pauseButton = this.add.button(608, 40, 'pauseBtn', function(){console.log('Game Paused!!!')}, this, 1, 0, 2);
		pauseButton.input.useHandCursor = true;
		pauseButton.anchor.setTo(0.5,0.5);

		pauseButton.inputEnabled = true;

    	currentGame = this.game;

    	pauseButton.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        	currentGame.paused = true;
    	});

    	this.game.input.onDown.add(function(){
    		console.log('Game Resumed!!!')
    		currentGame.paused = false;
    	});



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
	    if (this.game.time.totalElapsedSeconds() - cTime >= this.game.rnd.integerInRange(0, 60)){
	        // add ball in the bottom left corner
	        if(this.game.rnd.integerInRange(0, 1) == 0){
	            cTime = this.game.time.totalElapsedSeconds();

				var randomX = Math.floor(Math.random()*800);
				var randomY = Math.floor(Math.random()*960);


				// Get a random item from minions and bomb spritesheet
				var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

				// Create an object of a specific type using Factory method.
				minionFactoryObj = new MinionFactory();
				minion = minionFactoryObj.createMinions(this.game, rand).minion;


				minion.events.onInputDown.add(this.selectt, minion);

			    // add minion to flyingMinions group so you can loop all the obj in the flyingMinions group and exclude obj that not in flyingMinions
	            flyingMinions.add(minion);


	            // enable physics for minion. You have to do this or else your obj wont react to physics.
	            this.game.physics.enable(minion, Phaser.Physics.ARCADE);
	            minion.body.collideWorldBounds = false;
	            minion.body.velocity.y = this.game.rnd.realInRange(-300.0, -500.0);
	            minion.body.velocity.x = this.game.rnd.realInRange(150.0, 200.0);
	            totalMinions++;

	        }
	        // same logic as the block above but for right corner
	        else{
	            cTime = cTime + 1;

				// Get a random item from minions and bomb spritesheet
				var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

				// Create an object of a specific type using Factory method.
				minionFactoryObj = new MinionFactory();
				minion = minionFactoryObj.createMinions(this.game, rand).minion;

				// Changing the x & y co-ordinates to appear from right side of screen.
				minion.x = 960;
				minion.y = 300;

			    minion.events.onInputDown.add(this.selectt, minion);

	            flyingMinions.add(minion);
	            this.game.physics.enable(minion, Phaser.Physics.ARCADE);
	            minion.body.collideWorldBounds = false;
	            minion.body.velocity.y = this.game.rnd.realInRange(-300.0, -500.0);
	            minion.body.velocity.x = this.game.rnd.realInRange(-150.0, -200.0);
	            totalMinions++;
	        }

	    }

		// destroy object after it drop to bottom
	    flyingMinions.forEach(function(sprite){
	        if(sprite.y >=500){
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
		if(sprite.name == "Bomb")
			this.game.state.start('MainMenu');
		this.game.physics.arcade.moveToObject(sprite, transportation, 0, 50);
		sprite.lifespan = 55;
		onScoreChange.notify('addOne');
	}
};
