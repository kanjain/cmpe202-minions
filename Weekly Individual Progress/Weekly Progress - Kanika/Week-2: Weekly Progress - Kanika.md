## Week-2 (9/24-9/30)

### Research on Design Patterns:

As a team member, I thought of researching on the GOF design patterns and as per my understanding, I tried to come up with some suitable patterns that we can use while developing the game.

As we all know design pattern is a general repeatable solution to a commonly occurring problem in software design. It is like a template for how to solve a problem that can be used in many different situations.

Uses of design patterns:

•	It can speed up the development process by providing development paradigms.

•	Improves code readability for coders.

•	Patterns allow developers to communicate using well-known, well understood names for software interactions

Creational Design patterns:

These design patterns are all about class instantiation. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.

•	Builder

Separates object construction from its representation

•	Factory Method

Creates an instance of several derived classes

•	Prototype

A fully initialized instance to be copied or cloned

•	Singleton

A class of which only a single instance can exist

Structural Design patterns:

These design patterns are about class and object composition.

•	Adapter

Match interfaces of different classes

•	Bridge

Separates an object’s interface from its implementation

•	Decorator

Add responsibilities to objects dynamically

•	Facade

A single class that represents an entire subsystem

•	Flyweight

A fine-grained instance used for efficient sharing

•	Proxy

An object representing another object

Behavioral Design patterns:

These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

•	Chain of responsibility

A way of passing a request between a chain of objects

•	Command

Encapsulate a command request as an object

•	Iterator

Sequentially access the elements of a collection

•	Mediator

Defines simplified communication between classes

•	Observer

A way of notifying change to a number of class

• State

Alter an object's behavior when its state changes

•	Strategy

Encapsulates an algorithm inside a class

•	Visitor

Defines a new operation to a class without change

## CONCLUSION:

On the basis of my research, I found the below mentioned design patterns suitable to develop our game idea with somewhat less complexity. From creational design patterns, factory method and singleton I found useful.

Factory Method- We can use it to create different minion objects (thin, fat, long). Depending on some criteria, the factory method will provide a new instance of minion. Creating an instance of minions is decoupled from the consumer.

Singleton- The Game object should be Singleton. Phaser game engine cannot handle multiple instances of game, and there should be only one instance of game at a point in time. Since mouse Click and other events are triggered - and it only makes sense for it to be on one game. Also, a single player can only sensibly play one game.

As far as structural design patterns are concerned, I found decorator would help us to make the design simpler.

Decorator- We can decorate the game object with different themes and audio based on theme-option chosen.

In behavioral design patterns, State pattern and Observer pattern would be of most use.

State- The game states are Menu-mode, game-on, game-paused, end-game, they change based on user interaction and rules of the game

Observer (on keyboard or mouse events)- The observer/publish-subscribe pattern is common in any event-based system. A common event in the game is mouse click or keyboard keypress. The subscriber listens to the click event as an example. The subscriber usually the game-engine (or JavaScript engine) publishes the click event. The life-line component is an independent component that maintains the number of attempts remaining based on score. The on-going game is a separate component. For loose coupling between the two, we will use pub/sub pattern. Every time the score changes the game will publish event. And lifeline component will subscribe to it and change state based on score.

