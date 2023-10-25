// Anonymous Functions
const sayHello1 = function() {
    return `Hello`;
}

// Arrow Functions => Anonymous Functions
const sayHello3 = () => {
    return `Hello`;
}

////////////////////////////////////
const sayHello2 = function() {
    console.log(arguments);
}

sayHello2("Sina", "Ali", "Tina");
////////////////////////////////////

// Callback Function
setTimeout(function() {
    return `Hello`;
}, 1000);

// Arrow Function => Callback Function
setTimeout(() => {
    return `Hello`;
}, 1000);

// Named Function
function sayHello() {
    return `Hello`;
}

// Arrow Function => Named Function
// No Arrow Named Function

// Constructor Function
function Person(n) {
    this.name = n;
}

// Arrow Function => Constructor Function
// No Arrow Constructor Function

// Functions inside Objects => Object Methods
const person1 = {
    name: 'John',
    sayHello: function() {
        return `Hello`;
    }
}

// Arrow Function => Functions inside Objects
const person2 = {
    name: 'John',
    sayHello: () => {
        return `Hello`;
    }
}

// Benefits of Arrow Function -
// 1. Shorter Syntax (Aesthetics)
// 2. Binding of "this" keyword, Dynamic nature of "this" keyword
//    if your function does not uses the "this" keyword, then you can convert normal function to arrow function easily.

const me = {
    name: 'Sina',
    talk: function() {
        return this
    },
    arrowTalk: () => {
        return this
    }
}

me.talk()
// {name: "Sina", talk: f, arrowTalk: f}
me.arrowTalk()
// Window {0: global, window: Window, self: Window,
// document: document, name: "", location: Location}

// Don't use Arrow Functions for
// 1. Object methods
// 2. Prototypes
// 3. Constructors
// 4. Event handlers