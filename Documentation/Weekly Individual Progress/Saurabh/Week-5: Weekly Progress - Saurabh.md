# Week-5 (10/22 - 10/28) Weekly Progress : Saurabh

## Research on implementing Factory method design pattern in our game:

JavaScript has no formal support for class hence we need to create objects and use them to create other objects. 

In JavaScript there are different ways to create new objects:

1) Define and create a single object, using an object literal.

   For e.g. 
   
   ```javascript
        var player = {
            firstName:"Roger", 
            lastName:"Federer", 
            age:36,
            rank:1,
            displayPlayerInfo: function() {
                return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old and is currently no. ' 
                + this.rank + ' player in the world';
            }
        }
   ```
   In this case we cannot create an instance of the class because it already exists. We can then use it as given below:
   ```javascript
   alert(player.displayPlayerInfo());
   ```
2) Define and create a single object, with the keyword new.

   ```javascript
    var player = new Object();
    player.firstName = "Roger";
    player.lastName = "Federer";
    player.age = 36;
    player.rank = 1; 
   ```
   This way of creating an object is similar to the previous way using object literal however for simplicity and 
   execution speed the object literal method is recommended.
   
3) Define an object constructor, and then create objects of the constructed type.

   Both the previous 2 ways of creating objects have a common problem which is that they only create a single object. 
   In order to create multiple objects of the same type we need to use an object constructor function as shown below:
   ```javascript
    function player(first, last, age, rank) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.rank = rank;
    }
    var player1 = new player(“Roger”, “Federer”, 36, 1);
    var player2 = new player(“Rafael”, “Nadal”, 31, 2);
   ```
    This is most common way of creating an object in which we define a normal JavaScript function and then create an object 
    by using the new keyword. 
    
    
