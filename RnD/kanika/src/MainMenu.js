Minion.MainMenu = function(game) {
	startButton = null;
};
Minion.MainMenu.prototype = {
	create: function() {
		this.game.add.sprite(0, 0, 'background');
		startButton = this.add.button(640-401-10, 960-143-10, 'button-start', 
			function(){
			this.game.state.start('Game')
		}, this, 1, 0, 2);
	}
};
