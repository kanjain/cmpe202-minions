Made draft for a use case spec document as below

Use Case Name: Jumping Minions

Brief Description:
An object (a minion in this case ) should pop from the bottom of the screen and reach a height that is less than the upper boundry of the game's screen and fall down to the bottom of the screen following laws of gravity. Clicking on a minion should change the expression of the minion to a happy one

Actors: Game developer, player

Basic Flow of events:
1. User clicks on 'Play'
2. Screen with the game background appears
3. Minions start appearing as a function of a random generator
3. User clicks on the minion
4. Minion expression changes
5. Score gets updated
6. Health gets updated

Alternate Flows: None

Preconditions:
A backdrop for the game of mxn dimensions with an appropriate background
A minion object that is responsive to click

Success guarantee:
A minion object should be a generated as function of a randomObject Generator that should reach a height<n  and fall down as if its a free fall. On Clicking on a minion should change the expression of the minion to a happy one

Minimal guarantee: A clickable minion should pop up on the screen
