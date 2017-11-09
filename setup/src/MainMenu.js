SaveTheMinions.MainMenu = function(game) {
	var startButton = null;
	var howToButton = null;
    var menu = null;

};

SaveTheMinions.MainMenu.prototype = {
	create: function() {
        menu = this.game.add.audio('menuSelect');
        this.game.add.sprite(0, 0, 'background_city');

        // A button made from an image including text
        startButton = this.add.button(320, 200, 'playBtn', function() {
            menu.play();
            // TODO: Go to preload state first, and then redirect to game state.
            this.game.state.start('Game');
        }, this, 1, 0, 2);

        startButton.input.useHandCursor = true;
        startButton.anchor.setTo(0.5,0.5);

        // A button made from an image including text
        howToButton = this.add.button(320, 300, 'howToBtn', function(){menu.play();this.game.state.start('StoryHowto')}, this, 1, 0, 2);
        howToButton.anchor.setTo(0.5,0.5);

        // A button made from an image to select levels

        howToButton = this.add.button(320, 400, 'levelBtn', function(){menu.play();this.game.state.start('LevelSelect')}, this, 1, 0, 2);
        howToButton.anchor.setTo(0.5,0.5);

        // This property is needed to display Hand cursor everytime. By default it only displays it once before being clicked.
        // After that normal arrow head cursor is displayed.
        howToButton.input.useHandCursor = true;
	}
};
