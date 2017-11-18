SaveTheMinions.LevelUp = function(game) {
    select_level = null;
    forest = null;
    city = null;
    gametheme=null;
};
SaveTheMinions.LevelUp.prototype = {
    create: function() {
        this.createButton();
    },

    createButton:function () {
        this.game.add.sprite(0, -200, 'congrats');
        this.game.add.sprite(-160, -20, 'CongratsText');
        this.game.add.sprite(-150, 300, 'LevelUp');
        startButton = this.add.button(50, 550, 'continueBtn', function() {
            //home.stop();
            this.game.state.start('GameAdvanced');
        }, this, 1, 0, 2);


    }

};
