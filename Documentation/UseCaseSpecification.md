**1) Use case:** Play game  
**Preconditions:**: game state must be in Howto State or Mainmenu State  
**Actors:** Player  
**Goal:** To start a new game  
**Overview:**  
A player click on play game button in different stages of the game to start a new game  
**Typical course of events:**  
**Actor action**  
1 Player click on play game button in main menu  
**System response**  
2 The game state set to Game State  
**Actor action**  
2 Player click on play game button at the end of the game  
**System response**  
1 Game ended, show a play game button  
3 Game state set to Game State
**Actor action**  
1 Player click on play game button in Howto screen  
**System response**  
2 Game state is set to Game State  
**Alternative course**

**2) Use case:** Pause Game  
**Preconditions:**: game state must be in Game State  
**Actors:** Player  
**Goal:** To pause a ongoing game  
**Overview:**  
A player can pause his game at anytime to preserve his ongoing game by pressing P key    
**Typical course of events:**  
**Actor action**  
1 Player hit P key  
**System response**  
2 The game set paused property to true  
**Alternative course**

**3) Use case:** Howto Play  
**Preconditions:**: game state must be in MainMenu State  
**Actors:** Player  
**Goal:** To learn how to play the game    
**Overview:**  
A player can learn how to play the game before actually playing it      
**Typical course of events:**  
**Actor action**  
1 Player click on Howto Play button  
**System response**  
2 The game state set to Howto State which show all the shortcut and how to play the game in text    
**Alternative course**

**4) Use case:** Exit Game  
**Preconditions:**: game state is not in Preload and Boot State  
**Actors:** Player  
**Goal:** To exit the game  
**Overview:**  
A player can exit the game whenever he likes to stop the game from running in the browser  
**Typical course of events:**  
**Actor action**  
1 Player hit ecs key  
3 Player hit on the exit game button  
**System response**  
2 The game paused property set to true and shows a exit game button  
4 The call game.destroy() to destroy the game  
**Alternative course**

