SaveTheMinions.IntroAnimations = function(game) {
	minionArray = ['Dave','Tim','Jerry','Dave','Tim','Jerry','Dave','Tim','Jerry','Dave','Tim','Jerry','Dave','Tim','Jerry'];

};
SaveTheMinions.IntroAnimations.prototype = {
	create: function() {

        menu =this.game.add.audio('menuSelect');
        this.game.add.sprite(0, 0, 'background_city');

        i=0;

        // for (var i = 10; i <= 200; i+=40) {

        //     // Get a random item from minions and bomb spritesheet
        //     var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

        //     console.log(rand);

        //     var sprite = this.game.add.sprite(this.game.world.centerX + i, 0, 'minions_spritesheet');
        //     sprite.frame = rand;
        //     sprite.anchor.setTo(0.5, 0.5);
            
        //     // Add a simple bounce tween to each character's position.
        //     var tween = this.game.add.tween(sprite).to({y: this.game.world.centerY}, 2000, Phaser.Easing.Bounce.Out, 
        //         true, 1000 + 400 * rand, 0);

        //     //  And this tells it to repeat 10 times.
        //     //  The 1000 tells it to wait for 1 second before restarting the animation.
        //     tween.repeat(10, 1000);
        // }

                //Get a random item from minions and bomb spritesheet
                var rand = minionArray[Math.floor(Math.random() * minionArray.length)];

                var min1 = this.game.add.sprite(this.game.world.centerX + i, 0, 'minions_spritesheet');
                min1.frame = 0;
                min1.anchor.setTo(0.5, 0.5);
            
            // Add a simple bounce tween to each character's position.
                var tween1 = this.game.add.tween(min1).to({y: this.game.world.centerY}, 2000, Phaser.Easing.Bounce.Out, 
                    true, 1000 + 400 * rand, 0);

            //  And this tells it to repeat 10 times.
            //  The 1000 tells it to wait for 1 second before restarting the animation.
                tween1.repeat(10, 1000);

                var min2 = this.game.add.sprite(this.game.world.centerX - 50, 0, 'minions_spritesheet');
                min2.frame = 1;
                min2.anchor.setTo(0.5, 0.5);
            
            // Add a simple bounce tween to each character's position.
                var tween2 = this.game.add.tween(min2).to({y: this.game.world.centerY}, 2000, Phaser.Easing.Bounce.Out, 
                    true, 1000 + 400 * rand, 0);

            //  And this tells it to repeat 10 times.
            //  The 1000 tells it to wait for 1 second before restarting the animation.
                tween2.repeat(10, 1000);

                var min3 = this.game.add.sprite(this.game.world.centerX + 50, 0, 'minions_spritesheet');
                min3.frame = 2;
                min3.anchor.setTo(0.5, 0.5);
            
            // Add a simple bounce tween to each character's position.
                var tween3 = this.game.add.tween(min3).to({y: this.game.world.centerY}, 2000, Phaser.Easing.Bounce.Out, 
                    true, 1000 + 400 * rand, 0);

            //  And this tells it to repeat 10 times.
            //  The 1000 tells it to wait for 1 second before restarting the animation.
                tween3.repeat(10, 1000);





        menu.play();
        
	},
    update: function() {
        

        
    }
};
