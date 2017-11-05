# Week-6 (10/22-11/04) Weekly Progress : Kanika

**Goal:**

To implement **Health bar and score bar** in the setup code using observer pattern.

**Implementation of Health bar and score bar and display them working on game screen:**

This week I worked on building the module for scorebar and healthbar with other iteractions of the game. The healthbar is reduced when the minions drop to the floor. I created a "onHealthChange" observer. The subject (on destroy of minions) notifies the healthbar component to reduce the health. Likewise I created the "onScoreChange" observer. When a minion is selected, a particular type of event is triggered. If a larger minion is selected, then an event with corresponding score is issued. The score will increment either 1,2 or 3 based on the minion selected. I also did some refactoring to reduce code redundancy, extracted out repeated code in a method with parameters.
