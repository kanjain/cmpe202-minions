//================================================================================
// These are the states for state design pattern
//================================================================================
var Lvl1State = function (game) {
    //game = game;
    this.changeState = function () {
        console.log('lvl2');
        game.changeLvlState(new Lvl2State(game), 1);
        
    }

};

var Lvl2State = function (game) {
    //this.game = game;
    this.changeState = function () {
        console.log('lvl3');
        game.changeLvlState(new Lvl3State(game), 0.5);

    }

};

var Lvl3State = function (game) {
    //this.game = game;
    this.changeState = function () {
        console.log('lvl4');
        game.changeLvlState(new Lvl4State(game), 0.0);

    }

};


var Lvl4State = function (game) {
    //this.game = game;
    this.changeState = function () {
        console.log('lvl5');
        //this.game.changeLvlState(new Lvl1State(game), 0);

    }
};