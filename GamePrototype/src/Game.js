SaveTheMinions.Game = function(game) {
	cTime = 0;
    count = 0;
    count1 = 0;
    frameArray = [0,1,2];
	minionEnum = {
		'Dave': 0,
		'Tim': 1,
		'jerry': 2
	};
};

SaveTheMinions.Game.prototype = {
	create: function() {

			// physic global setup
		    this.game.physics.startSystem(Phaser.Physics.ARCANE);
		    this.game.physics.arcade.gravity.y = 500;

		    //  Background image for our game.
    		this.game.add.sprite(0, 0, 'sjsu');

		    // add group
    		flyingMinions = this.game.add.group();

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
	            count1++
	            
	        }
	        // same logic as the block above but for right corner
	        else{
	            cTime = this.game.time.totalElapsedSeconds();
	            
	            minion = this.game.add.sprite(640,300,'minions_spritesheet'); 
	            var rand = frameArray[Math.floor(Math.random() * frameArray.length)];
			    minion.anchor.setTo(0.5, 0.5);
			    minion.frame=rand;

	            flyingMinions.add(minion);
	            this.game.physics.enable(minion, Phaser.Physics.ARCADE);
	            minion.body.collideWorldBounds = false;
	            minion.body.velocity.y = this.game.rnd.realInRange(-300.0, -500.0);
	            minion.body.velocity.x = this.game.rnd.realInRange(-150.0, -200.0);
	            count1++
	        }

	    }
	    // destroy object after it drop to bottom
	    flyingMinions.forEach(function(obj){
	        if(obj.y >=540){
	            obj.destroy();
	            count++;
	            
	         }
	    });
	},
	render: function() {
		this.game.debug.text('Destroy item count: ' + count, 100, 100);
    	this.game.debug.text('all item count: ' + count1, 100, 120);
	}
};