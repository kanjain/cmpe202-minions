SaveTheMinions.Game = function(game) {
	cTime = 0;
    count = 0;
	count1 = 0;
	test = 0;
	frameArray = [0,1,2];
	truck = null;
	minionEnum = {
		'Dave': 0,
		'Tim': 1,
		'jerry': 2
	};

	// define observer
	onScoreChange = null;
};

function MinionFactory(){
	this.createMinionOrBomb = function(game, typeOfMinion){
		var minion;

		if(typeOfMinion === 'Dave'){
			console.log('Create Dave!');
		}else if (typeOfMinion === "Tim") {
			console.log('Create Tim!');
		} else if (typeOfMinion === "Jerry") {
			console.log('Create Jerry!');
		} else{
			console.log('Create Nothing!');
		}
		minion.type = typeOfMinion;

		return minion;
	}
};

SaveTheMinions.Game.prototype = {
	create: function() {

			// physic global setup
		    this.game.physics.startSystem(Phaser.Physics.ARCANE);
		    this.game.physics.arcade.gravity.y = 500;

		    //  Background image for our game.
    		this.game.add.sprite(0, 0, 'sjsu');

    		// Adding a new Truck object to save the minions.
    		truck = this.game.add.sprite(0, 482, 'truck');

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


				minion = this.game.add.sprite(0,300,'minions_spritesheet');

				minion.inputEnabled = true;
				minion.events.onInputDown.add(this.selectt, minion);
				
	            var rand = frameArray[Math.floor(Math.random() * frameArray.length)];
			    minion.anchor.setTo(0.5, 0.5);
			    minion.frame=rand;

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
	            
				minion = this.game.add.sprite(640,300,'minions_spritesheet'); 

				minion.inputEnabled = true;
				minion.events.onInputDown.add(this.selectt, minion);

	            var rand = frameArray[Math.floor(Math.random() * frameArray.length)];
			    minion.anchor.setTo(0.5, 0.5);
			    minion.frame=rand;

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
	        if(sprite.y >=545){
	            sprite.destroy();
	            count++;
			}

	    });
	},
	render: function() {
		this.game.debug.text('dead minions: ' + count, 100, 100);
		this.game.debug.text('total number of minions: ' + count1, 100, 120);
		this.game.debug.text('saved minion: ' + test, 100, 140);
	},

	updateScore: function(event) {
		if (event === 'addOne') {
			test += 1;
		}
	},

	selectt: function(sprite){
		this.game.physics.arcade.moveToObject(sprite, truck, 0, 50);
		sprite.lifespan = 55;
		onScoreChange.notify('addOne');
	}


};

