// Source Website: https://www.youtube.com/watch?v=vn3tm0quoqE
// Live Website: https://jsbin.com/ceyuyuq/edit?js,console

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
// const me =
// sayHello()
// return
// •I am Qoli'
// }
// }
// me. sayHello() //'I am Qoli'
