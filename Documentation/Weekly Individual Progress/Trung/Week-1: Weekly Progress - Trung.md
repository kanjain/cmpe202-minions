## Week 2 (9/24-9/30)
![](https://mozdevs.github.io/html5-games-workshop/assets/platformer/game_state.png)

* Init: instantiate the game itself.  
* Preload: load game image file, animation to memory for fast access.  
* Create: create the initial state of the game with game objects.  
* Update: receive input from the user, update the game logic accordingly, this and render step will run until the game finish or shutdown.
* Render: actually draw the game to user screen. FPS of 60 mean it will draw the game 60 times per second.  
* Shutdown: destruction of the game instance.

***

## Week-1 (9/17-9/23)
### BabylonJS

* BabylonJS is a free 3D game engine. It can be run in browser. It supports a lot of advanced features like animation, physic, lights... beside the basic features.  
* I personally think the framework is really amazing and well made. It has detail tutorial both in video and documentation. You can play with the framework easily just need to go to their [playground](https://playground.babylonjs.com/). **The downside is that the framework doesn't support 2D. Given the length of the project, we should disregard this framework**.  
* I also tried to run some of the 3D example game in Macbook Air, and they seem laggy so we should not do 3D at all for our sake since we all use Macbook Air

**Pros:**  
* Great customization  
* Detail tutorial and example  
* Friendly for starter  

**Cons:**  
* It doesn't has support for 2D  
