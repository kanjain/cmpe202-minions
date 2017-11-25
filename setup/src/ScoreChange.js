function ScoreChange() {
    this.changeScore =function(event){
            var scoreIncrement;
        console.log(event);
            if (event === eventOne) {
                scoreIncrement = 1;
            }
            if (event === eventTwo) {
                scoreIncrement = 2;
            }
            if (event === eventThree) {
                scoreIncrement = 3;
            }
        if (event === eventBad) {
            scoreIncrement = -10;
        }
        return scoreIncrement;
        }
    };
