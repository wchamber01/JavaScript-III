/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The global space where "this" defaults to when not in strict mode.
* 2. Implicit Binding: Where "this" refers to what's found left of the 'dot'.
* 3. New Binding: "This points to new object that has been created."
* 4. Explicit Binding: Is used with '.call', '.apply' or '.bind'
*
* write out a code example of each explanation above
*/

window.age = 10

function dogAge () {
    console.log(`Hickory is ${this.age} years old.`)
}

// Principle 2
// code example for Implicit Binding

const user = {
    name: 'William',
    age: 35,
    greet: function() {
        alert(`Hello, my name is ${this.name}`)
    }
}
user.greet();

// Principle 3
// code example for New Binding

function pet(name, age){
    this.name = name;
    this.age = age;
}

const dog =  new pet('Hickory', 10);
console.log(dog.age)

// Principle 4
// code example for Explicit Binding

function dogGreet () {
    alert(`Hello, my dog's name is ${this.name}.`)
}

const myDog = {
    name: 'Hickory',
    age: 10,
}

dogGreet.call(myDog)