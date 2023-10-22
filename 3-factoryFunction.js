// A Factory function is any function that returns a object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.

// Factory Function are specially useful -
// - when want to create multiple objects
// - to avoid xode dupication

// Without Factory Function (Longer method)

const agamya = {
	name: 'Agamya',
	age: 20,
	job: 'Software Engineer',
	city: 'Bangalore',
	talk: function talk() {
		return `Hi my name is ${this.name}`;
	},
};

const ben = {
	name: 'Ben',
	age: 23,
	job: 'ML Engineer',
	city: 'Kolkata',
	talk: function talk() {
		return `Hi my name is ${this.name}`;
	},
};

console.log(agamya.talk());
console.log(ben.talk());

// With Factory Function (Shorter method)

function personFactory(name, age, job, city) {
	return {
		name,
		age,
		job,
		city,
		talk() {
			return `Hi my name is ${this.name}`;
		},
	};
}

const tina = personFactory('Tina', 21, 'Data Scientist', 'Mumbai');
console.log(tina.talk());

tina.name = 'Tina Roy';
console.log(tina.talk());


function createElement (type, text, color) {
    const element = document.createElement(type)
    element.innerText = text
    element.style.color = color
    document.body.append(element)
    return {
        element,
        setText (text) {
        element.innerText = text
        },
        setColor (color) {
        element.style.color = color
        }
    }
}

const paragraph = createElement('p', 'Hello World', 'red')