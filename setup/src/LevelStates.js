//================================================================================
// These are the states for state design pattern
//================================================================================
var Lvl1State = function (game) {
    this.game = game;
    this.lvlFreq = this.game.game.rnd.realInRange(0.6, 0.9)
    this.changeState = function () {
        console.log('lvl2');
        this.game.changeLvlState(new Lvl2State(game), this.lvlFreq);
        
    }
    

};

var Lvl2State = function (game) {
    this.game = game;
    this.lvlFreq = this.game.game.rnd.realInRange(0.2, 0.5)
    this.changeState = function () {
        console.log('lvl3');
        this.game.changeLvlState(new Lvl3State(game), this.lvlFreq);
        
    }

};

var Lvl3State = function (game) {
    this.game = game;
    this.changeState = function () {
        console.log('lvl4');
        //this.game.changeLvlState(new Lvl4State(game), 0.3);

    }

};