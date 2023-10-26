function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 1000)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('🌧')
                    break
                default:
                    reject('NO ICON FOUND')
            }
        }, 1000)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(data) {
    console.log(`Error: ${data}`)
}

// getWeather()
//     .then(getWeatherIcon)
//     .then(onSuccess)
//     .catch(onError)

///////////////////////////////////////////////////////////////////////////////////////////
// Second Example -

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Inside FUN1')
            resolve('GOOD DATA')
        }, 1000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Inside FUN2')
            resolve('😎')
        }, 1000)
    })
}

function onSuccess (data) {
    console.log(`SUCCESS: ${data}`)
}

function onError (errorCode) {
    console.log (`ERROR: ${errorCode}`)
}

function onFinally() {
    console.log('Finally End of Program...')
}

// fun1()
//     .then(fun2, onError) // Either you can handle error for each case separately or you can handle it GLOBALLY at the end in .catch()
//     .then(onSuccess)
//     .catch(onError)
//     .finally(onFinally) // Finally will always run at the end of the program

///////////////////////////////////////////////////////////////////////////////////////////
// Third Example -

function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast));
    })
}

function displayData(weather) {
    console.log(weather)
}

function onError(err) {
    console.log(`ERROR: ${err}`)
}

fetchData()
    .then(displayData)
    .catch(onError)