// Constructor Function is nothing but a function that is used to create objects for us. Very similar to Factory Function. The only difference is that Constructor Function is called with the "new" keyword.

// Key Points:
// 1. Constructor Function is called with the "new" keyword.
// 2. Constructor Function is named with a capital letter.
// 3. Constructor Function automatically creates the "this" object [this = {}] behind the scene.
// 4. Constructor Function returns the object implicitly, without explicitly writing "return" keyword.
// 5. Constructor Function are a more concise way of creating => "Factory Functions".
// 6. No need for retunr statemnet, as constructor function returns the object automatically.

// Example 1
function Person(name) {
	this.name = name;
	this.talk = () => {
		return `Hello I am ${this.name}`;
	};
}

const sina = new Person('Sina');
const ben = new Person('Ben');
const sam = new Person('Sam');

console.log(sina.talk());
console.log(ben.talk());
console.log(sam.talk());

// Example 2
function SuperElement(type, content) {
	this.el = document.createElement(type);
	this.el.innerText = content;
	document.body.append(this.el);
	this.el.addEventListener('click', () => {
		console.log(this.el);
	});
}

const h1 = new SuperElement('h1', 'Hellooo!');

// Example 3

const array = ['a', 'b', 'c'];
const myElements = array.map((item) => {
	return new SuperElement('p', item);
});

console.log(myElements); // works only on browser, not with node.js