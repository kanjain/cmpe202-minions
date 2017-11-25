function ScoreChangeDecorator() {
    this.decorateScoreChange =function(scoreChange,event,consecutiveSuccess,continousClickLimit,decorateValue){
     var scoreIncrement = scoreChange.changeScore(event);
        console.log("Consecutive Success "+ consecutiveSuccess);
        console.log("continousClickLimit "+ continousClickLimit);
            if(consecutiveSuccess > continousClickLimit){
                scoreIncrement += decorateValue;
            }
            console.log("Score Increment"+scoreIncrement);
        return scoreIncrement;
    }
};