/*
const age = 100;

function go() {
    const age = 200;
    const hair = 'blonde';
    console.log(age);
    console.log(hair);
}

go();

console.log(age);

*/

/*
function isCool(name) {
    let cool;
    if (name === 'wes') {
        cool = true;
    } 
    console.log(cool);
    return cool;
}


for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

const dog = 'snickers';

function logDog(dog) {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog(dog);
}

go();
//prints 'snickers' - computer does not care about where it's run, it cares where it is defined. 

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}