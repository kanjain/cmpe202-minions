# Week-5 (10/15-10/21) Weekly Progress : Kanika

**Goal:**

To implement **Observer design pattern** in the prototype code.

**Observer Design Pattern:**

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.

When building web apps you end up writing many event handlers. Event handlers are functions that will be notified when a certain event fires. These notifications optionally receive an event argument with details about the event (for example the x and y position of the mouse at a click event).

The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern. Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.

**Implementation of Observer pattern for score change event:**

The change of score is an event that two modules decoupled pieces of the game are interested in. First is the total score of the player. Second is the health based on which the game is over. Consider score as the subject (or publisher) and the totalScore and healthScore as the observers (or subscriber).

This week, I have defined a way to do Observer pattern in JavaScript. Defined a class Observer that has three methods, subscribe, unsubscribe and notify. It allows a decoupled way to communicate between these modules. 

After the definition, I instantiated a onScoreChange observer to which "updateScore" as a method subscribes. When the score changes the observer notifies all the subscribers.
