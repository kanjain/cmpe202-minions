# Behavioral Driven Development Document

Behavior Driven testing is an extension of TDD. Like in TDD in BDD also we write tests first and the add application code. The major difference that we get to see here are

* Tests are written in plain descriptive English type grammar
* Tests are explained as behavior of application and are more user focused
* Using examples to clarify requirements
* This difference brings in the need to have a language which can define, in an understandable format.

The main feature of the BDD test is that it focuses on Acceptance testing. It made it easy for anyone in the team to read and write test and with this feature it brings business users in to the test process, helping teams to explore and understand requirements.

**Following** are the few features of the game that we all individually worked on  :

### **Feature:** Update the user with latest score

User should get the latest score everytime.


**Scenario:** Overall score

The overall ongoing score for the game is always up-to-date while the game is in progress.

**Given** I am playing the game

**When** I am clicking the minion

**Then** I should see an updated score bar

**And** I should get the latest score


**Scenario:** Instant Increment value

The increment in score based on the type of minion is always reflected for score clarity.

**Given** I am playing the game

**When** I score a minion

**Then** I should see an increment value

**And** I should see the score changing for overall score.


