# Week-3 (10/1 - 10/7) Weekly Progress : Kanika

Developed a **prototype design** for implementing the display of score card, health bar and implementing the
score calculation logic. I have followed the steps below:

Download and install a web server. I have downloaded XAMPP.

Download the Sublime IDE for all the coding work.

Setup the phaser game engine in my local machine.

Then I tried to make a crude design on how both the score and health bar will work if user click on that specified object(in my design it is minion image),it will increase the score and if the user click another object(the Gru image), it will reduce the health line.

To start building this, first of all I have created a basic folder structure that contains **images(img),source code(src)** and one index.html file.
In img folder I have kept all the images and spritesheets that I required to build the background and both health bar and score.
I have also kept the minion image and a gru image that served as my specified objects.

**index.html file:** Its a normal html file. It represents the html canvas where the game will be displayed. I have followed the specified phaser tutorials for building this file and specified the contents of the file accordingly.

In the src folder, I have kept all my source code that I have written for building up this prototype design.
Game.js and MainMenu.js are the files in which I did all my coding. 


## Result :
When you start the index.html on webserver, A startup-screen is displayed with a start button on it. If you click the start button, a new game screen will appear. On the game screen, there are 2 objects (minion and gru) and one bar that calculates the score and one healthbar. If you click on minion image, the score will increase and if you click on Gru image, the heathbar will keep decreasing. Once the healthbar will vanish completey, the gameover screen will appear with two buttons on it-Try Again and Back To Main.

Please find the screenshots below:
