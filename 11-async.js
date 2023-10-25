// Async Function -

// Self-made example, # TODO: Make it work with async & promises

function orderPizza(callback) {
    console.log('Pizza is being ordered...')
    callback()
}

function makePizza(callback) {
    console.log('Started Pizza making...')
    setTimeout(function() {
        console.log('Finished Pizza making...')
    }, 1500)
    callback()
}

function eatPizza() {
    console.log('Pizza is being eaten...')
}

////////////////////////////////////////////////////////

// Proper example of Async Function

function orderPizza (callback) {
    setTimeout (() => {
        const pizza = '🍕'
        callback(pizza)
    }, 1500)
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza (pizzaReady)
console.log('Call Qoli')
// Call Qoli
// Eat the 🍕

////////////////////////////////////////////////////////

window.addEventListener('click', callback)

function callback() {
    console.log('Clicked')
}