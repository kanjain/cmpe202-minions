SaveTheMinions.Game = function(game) {
	cTime = 0;
    count = 0;
	count1 = 0;
	test = 0;
	scoreIncrement =1;
	consecutiveCount=0;

	transportation = null;
	minionArray = ['Dave','Tim','Jerry'];

	// define observer
	onScoreChange = null;
};
SaveTheMinions.Game.prototype = {
	create: function() {

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

        onScoreChange.subscribe(this.updateScore);
		},
	update: function() {

		// add ball randomly between 0-15 sec
	    if (this.game.time.totalElapsedSeconds() - cTime >= this.game.rnd.integerInRange(0, 15)){
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
	            count1++;

	        }
	        // same logic as the block above but for right corner
	        else{
	            cTime = this.game.time.totalElapsedSeconds();

				// Get a random item from minions and bomb spritesheet
				var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

				// Create an object of a specific type using Factory method.
				minionFactoryObj = new MinionFactory();
				minion = minionFactoryObj.createMinions(this.game, rand).minion;

				// Changing the x & y co-ordinates to appear from right side of screen.
				minion.x = 640;
				minion.y = 300;

			    minion.events.onInputDown.add(this.selectt, minion);

	            flyingMinions.add(minion);
	            this.game.physics.enable(minion, Phaser.Physics.ARCADE);
	            minion.body.collideWorldBounds = false;
	            minion.body.velocity.y = this.game.rnd.realInRange(-300.0, -500.0);
	            minion.body.velocity.x = this.game.rnd.realInRange(-150.0, -200.0);
	            count1++;
	        }

	    }

		// destroy object after it drop to bottom
	    flyingMinions.forEach(function(sprite){
	        if(sprite.y >=605){
	            sprite.destroy();
                consecutiveCount = 0;
                scoreIncrement =1;
	            count++;
			}

	    });
	},
	render: function() {
		this.game.debug.text('dead minions: ' + count, 100, 100);
		this.game.debug.text('total number of minions: ' + count1, 100, 120);
		this.decorateScore();
        this.game.debug.text('saved minion: ' + test, 100, 140);
	},

    decorateScore: function() {
    if(consecutiveCount> 2 && consecutiveCount < 4 ){
        scoreIncrement = 2 * scoreIncrement;
    }
        if(consecutiveCount> 4 && consecutiveCount < 8){
            scoreIncrement = 2 * scoreIncrement;
        }
    },

	updateScore: function(event) {
		if (event === 'addOne') {
			test += scoreIncrement;
			consecutiveCount+=1;
		}
	},

	selectt: function(sprite){
		this.game.physics.arcade.moveToObject(sprite, transportation, 0, 50);
		sprite.lifespan = 55;
		onScoreChange.notify('addOne');
	}


};
