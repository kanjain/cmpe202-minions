# Week-2 (9/24 - 9/30) Weekly Progress : Saurabh

How to setup the development environment?

### Step-1) Download and install a web server

The easiest option is use "bundle installers" which directly set-up popular web technologies like Apache, PHP and MySQL from a single exe.
For Mac OS : MAMP (https://www.mamp.info/en/)
For Windows : XAMPP (https://www.apachefriends.org/index.html)

Other option is to use simple HTTP server from python.

### Step-2) Download and install an IDE

Sublime Text is a very powerful and highly popular IDE and it is also being used by the team behind phaser game engine. Download and install it from http://www.sublimetext.com/

### Step-3) Download Phaser

Make a new folder on your computer for the project 

**username$** `mkdir SaveTheMinions`

**SaveTheMinions username$** `cd SaveTheMinions`

Create a new folder 'src' to store all the main javascript files needed for the game using the following command:
**SaveTheMinions username$** `mkdir src`

Create a new folder 'img' to store all the images and spritesheets needed for the game using the following command:
**SaveTheMinions username$** `mkdir img`

Download the following two files from Phaser's official git repository (https://github.com/photonstorm/phaser-ce/tree/v2.8.8/build) into your newly created 'src' folder:

* phaser.js
* phaser.min.js

_**OR**_

You can clone the entire official git repository using the command:

git clone https://github.com/photonstorm/phaser-ce.git

This is will fetch the entire phaser repository in your computer. You can then find the **phaser.js** and **phaser.min.js** in the build folder.
