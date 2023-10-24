// "Factory" vs "Constructor" vs "Class"

// "Constructor function" Example -
// In Constructor function, each new object "SHARES" the same copy of the function.
// So any update to the function will be reflected in all the objects.
// Uses less memory than factory function.

function Person(n) {
	this.name = n;
}

// "Factory function" Example -
// In Factory fucntion, each "NEW" object has its own copy of the function.
// So any update to the function will not be reflected in all the instances/objects.
// Uses more memory than constructor function.

function personFactory(n) {
	return {
		name: n,
	};
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "Factory Function"

const me = personFactory('Agamya');
const you = personFactory('Sina');

Object.prototype === me._proto_;
// true

Object.prototype.speak = function () {
	return 'Oh Khelloo';
};

me.speak();
// Oh Khelloo
you.speak();
// Oh Khelloo

heading = {};
heading.speak();
// Oh Khelloo  - A Bug introduced in the code

window.speak();
// Oh Khelloo  - A Bug introduced in the code

// This bug can be fixed by using "Constructor Function"
const Me = new Person('Agamya');
const You = new Person('Sina');

Me.speak() = function () {
	return `Bella Ciao I am ${this.name}, How are you?`;
}

// You.speak(); also exists cause it shares the same copy of the function

// One advantage of using Factory function is data privacy, Factory function directly returns the object