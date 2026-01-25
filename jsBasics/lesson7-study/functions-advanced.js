function hof(callback) {
    console.log('inside HOF');
    callback();
}

function sayHi() {
    console.log('Hi');

}

function sayBye() {
    console.log('Bye');

}
hof(sayHi);


