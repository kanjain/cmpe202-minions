SaveTheMinions.MainMenu = function(game) {
	startButton = null;
	howToButton = null;
	
};
SaveTheMinions.MainMenu.prototype = {
	create: function() {
	
		this.game.add.sprite(0, 0, 'sjsu');
    
	    // A button made from an image including text
	    startButton = this.add.button(320, 200, 'playBtn', function(){this.game.state.start('Game')}, this, 1, 0, 2);
	    startButton.input.useHandCursor = true;
	    startButton.anchor.setTo(0.5,0.5);

	    // A button made from an image including text
	    howToButton = this.add.button(320, 300, 'howToBtn', function(){alert("How To Play Game")}, this, 1, 0, 2);
	    howToButton.anchor.setTo(0.5,0.5);

	    // This property is needed to display Hand cursor everytime. By default it only displays it once before being clicked. After that normal arrow head cursor is displayed.
	    howToButton.input.useHandCursor = true;
		
	}
};
