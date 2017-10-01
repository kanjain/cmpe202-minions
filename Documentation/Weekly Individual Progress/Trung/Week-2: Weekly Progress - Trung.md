## Week 2 (9/24-9/30)
![](https://mozdevs.github.io/html5-games-workshop/assets/platformer/game_state.png)

* Init: instantiate the game itself.  
* Preload: load game image file, animation to memory for fast access.  
* Create: create the initial state of the game with game objects.  
* Update: receive input from the user, update the game logic accordingly, this and render step will run until the game finish or shutdown.
* Render: actually draw the game to user screen. FPS of 60 mean it will draw the game 60 times per second.  
* Shutdown: destruction of the game instance.
