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
        this.game.add.sprite(-200, -100, 'congrats');
        startButton = this.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'continueBtn', function() {
            //home.stop();
            this.game.state.start('GameAdvanced');
        }, this, 1, 0, 2);


    }

};
