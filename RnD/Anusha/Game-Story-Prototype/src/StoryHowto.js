Minion.StoryHowto = function(game) {
	buttonContinue = null;
	state = null;
};
Minion.StoryHowto.prototype = {
	create: function() {
		this.showStory();
	},
	showStory: function() {
		this.game.add.sprite(0, 0, 'screen-story');
		this.state = 'story';
	},
};
