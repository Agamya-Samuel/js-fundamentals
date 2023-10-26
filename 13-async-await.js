// Example 1

// using Promises with async/await
async function start1() {
	const data = await fetch(
		'https://api.weather.gov/gridpoints/OKX/35,35/forecast'
	);
	const result = await data.json();
	console.log(result.properties.periods[1].shortForecast);
}

// using Promises with .then()
function start2() {
	fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
		.then((data) => data.json())
		.then((result) => {
			console.log(result.properties.periods[1].shortForecast);
		});
}

start1();
start2();

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 2

function getWeatherIcon(weather) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			switch (weather) {
				case 'Sunny':
					resolve('☀️');
					break;
				case 'Cloudy':
					resolve('☁️');
					break;
				case 'Rainy':
					resolve('🌧');
					break;
				default:
					reject('NO ICON FOUND');
			}
		}, 1000);
	});
}

async function main() {
	const data = await getWeatherIcon('Sunny');
	console.log(data);
}

main();

// Benefits of async/await -
// 1. async and await must be used together
//     Exceptions: JS Modules & Chrome DevTools Console allow await without the use of async
// 2. async/await only affects Promise-receiver, Promise-maker side remains as it is
// 3. You can await any function that returns a Promise, like json(), fetch(), also
// 4. Any function can be converted to async
// 5. All async functions return a Promise. If you Explicitly return a value (a string. or a number), it will still return a Promise, but a Resolved Promise with the value you returned
// 6. Error handling - using try/catch block. As we don't have catch block in async/await, we use classic old-school: try/catch block
// 7. Another advantage of async/await is that keeps the onSuccessful and onFailure code separate, which makes the code more readable and maintainable

// Example 3

function getData() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			// resolve ('Wish you Happy Birthday!')
			reject('Something went wrong!');
		}, 1);
	});
}

function onSuccess(data) {
	console.log(`SUCCESS: ${data}`);
}

function onFailure(err) {
	console.log(`ERROR: ${err}`);
}

// using try/catch block
async function start1() {
	try {
		const result = await getData();
		onSuccess(result);
	} catch (error) {
		onFailure(error);
	}
}

// using .then() and .catch()
async function start2() {
	const result = await getData()
		.then((result) => {
			console.log(`SUCCESS: ${result}`);
		})
		.catch((error) => {
			console.log(`ERROR: ${error}`);
		});
}

start1();
start2();