SaveTheMinions.LevelSelect = function(game) {
    select_level = null;
    forest = null;
    city = null;
    gametheme=null;
};
SaveTheMinions.LevelSelect.prototype = {
    create: function() {
        this.createButton();
    },

    createButton:function () {
        this.game.add.sprite(0, 0, 'main_menu_background');

        var forestBtn =this.add.button(this.game.world.centerX, this.game.world.centerY - 100, 'moderate', function(){this.setGameStrategicTheme(new forestTheme())}, this, 1, 0, 3);
        var spaceBtn =this.add.button(this.game.world.centerX, this.game.world.centerY, 'hard', function(){this.setGameStrategicTheme(new spaceTheme())}, this, 1, 0, 4);
        var backBtn =this.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'backBtn', function(){this.game.state.start('MainMenu')}, this, 1, 0, 4);
        forestBtn.input.useHandCursor = true;
        forestBtn.anchor.setTo(0.5,0.5);

        spaceBtn.input.useHandCursor = true;
        spaceBtn.anchor.setTo(0.5,0.5);

        backBtn.input.useHandCursor = true;
        backBtn.anchor.setTo(0.5,0.5);

    },
    setGameStrategicTheme:function(theme){
      //this.game.state.start('Game');
      this.gametheme=theme;
      this.gametheme.game=this.game;
      this.gametheme.applyTheme();
    },
    applyTheme:function(){
      this.gametheme.applyTheme();
    },
    startGame:function(){
      this.game.state.start('Game');
    }

};

var forestTheme = function() {
  this.applyTheme=function(){
    this.game.theme="forest";
    this.game.state.start('Game');
  }
};

var cityTheme = function() {
  this.applyTheme=function(){
    this.game.theme="city";
    this.game.state.start('Game');
  }
};

var spaceTheme = function() {
  this.applyTheme=function(){
    this.game.theme="space";
    this.game.state.start('Game');
  }
};
