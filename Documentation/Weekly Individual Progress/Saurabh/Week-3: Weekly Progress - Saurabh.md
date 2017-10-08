# Week-3 (10/1 - 10/7) Weekly Progress : Saurabh

To display the several minion characters in the game we need to develop a spritesheet for these different characters. 
A sprite sheet is an image file that contains several smaller images in a tiled grid arrangement. Each small image has  
its specific size and is considered to be a frame. So a spritesheet will have as many number of frames as we want to display
the animations or the different type of characters.

In our case I have a developed a sprite sheet with 3 of the most famous minion characters: 
* Dave
* Jerry 
* Tim

Then in order to try and display these characters on screen I created a new spawn_sprites.html which displays a 'Play' button.
On clicking the play button a random frame from the spritesheet is chosen and droped from a random x co-ordinate.
Each time the button is clicked a random minion character is dropped at a random position. 

I have also added slight bouncing animation to these characters which makes them bounce when they hit the floor. After they 
have lost the momentum and the character is stopped that particular sprite object is killed. However to keep repeating the 
process I have enabled the loop  which allows the same minion to be dropped again and again.

