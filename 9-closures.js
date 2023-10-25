// Closures remember the outer function scope
// even after creation time.

function human(n) {
    const name = n
    function sayHi() {
        console. log(`Hi I am ${name}`)
    }
    function sayHowYouFeel() {
    console. log(`${name} is feeling good!`)
    }

    return {
        sayHi,
        sayHowYouFeel
    }
}
const sina = human('Sina')
const qoli = human('Qoli')
sina.sayHi();
// Hi I am Sina
sina.sayHowYouFeel();
// Sina is feeling good!


// Example -
document.getElementById('size-12' ).onclick = function() {
    document.body.style.fontSize = '12px'
}
document.getElementById('size-14' ).onclick = function() {
    document.body.style.fontSize = '14px'
}
document.getElementById('size-16').onclick = function() {
    document.body.style.fontSize = '16px'
}

function clickHandler(size) {
    document.body.style.fontSize = `${size}px`
}

document.getElementById('size-12').onclick = clickHandler(12);
document.getElementById('size-14').onclick = clickHandler(14);
document.getElementById('size-16').onclick = clickHandler(16);
// Uncaught TypeError: Cannot set properties of
// null (setting 'onclick')
// at <anonymous>: 1:44

// Correct way of using closures -

function clickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}