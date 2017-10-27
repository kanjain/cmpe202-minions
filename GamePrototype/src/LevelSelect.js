SaveTheMinions.LevelSelect = function(game) {
    select_level = null;
    forest = null;
    city = null;
};
SaveTheMinions.LevelSelect.prototype = {
    create: function() {
        this.createButton();
    },

    createButton:function () {
        this.game.add.sprite(0, 0, 'sjsu');

        var forest =this.add.button(0, 200, 'forest_of_doom_button', this.startGame, this, 1, 0, 3);
        var city =this.add.button(80, 300, 'space_park_button', this.startGame, this, 1, 0, 4);
        startButton.input.useHandCursor = true;
        startButton.anchor.setTo(0.5,0.5);

    },
    setGameStrategicTheme:function(theme){
      //this.game.state.start('Game');
      this.theme.applyTheme();
    },
    startGame:function(){
      this.game.state.start('Game');
    }

};

var forestTheme = function() {
  this.applyTheme=function(){
    this.game.state.start('Game');
  }
};

var cityTheme = function() {
  this.applyTheme=function(){
    this.game.state.start('Game');
  }
};
