

// Use the 'function' keyword
/*
function doctorize(firstName) {
    return `Dr. ${firstName}`;
}
*/

// An anonymous function - does not have a name. 
/* function (firstName) {
    return `Dr. ${firstName}`;
} 
*/


// A Function Expression - store a function as a value in a variable.
/* const doctorize = function(firstName) {
    return `Dr. ${firstName}`;
}; 
*/

// Arrow functions 

// this can be rewritten to be made shorter
/* function inchToCM(inches) {
    const cm = inches * 2.54;
    return cm;
};
*/

//this is shorter, but not yet an arrow function
/*
const inchToCM = function (inches) {
    return inches * 2.54;
};
*/

//Introducing the 'fat arrow'
/*
const inchToCM = (inches) => {
    return inches * 2.54;
};
*/

//Now doing an "implicit return" here (does not use 'return' keyword)
/*
const inchToCM = (inches) => inches * 2.54;
*/

//If there is only ever one paramater for the arrow function, you can get rid of parantheses
/*
const inchToCM = inches => inches * 2.54;
*/
/*
function add(a, b = 3) {
    const total = a + b;
    return total;
};
*/

/*
const add = (a, b = 3) => a + b;
*/

//Returning an object - 

//First, let's try replicating this function that creates an object as an arrow function.
/*
function makeABaby(first, last) {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return
}
*/

//If you try and make this an arrow function without ()s, the function will think the {}s are encasing the function instead of the object. You add the ()s around it to avoid this.
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })


//An IIFE - Immediately Invoked Function Expression. Was popular before 'block scope'. 
(function(age) {
    return 'You are cool and age ${age}';
})(10);


//Methods
const wes = {
    name: 'Wes Bos',
    //Method
    sayHi: function() {
        console.log('Hey Wes');
        return 'Hey Wes';
    },
    //Short hand method
    yellHi() {
        console.log('HEY WESSS!')
    },
    //Arrow function
    whisperHi: () => {
        console.log('hiii wesssss');
    }
}
//in console using "wes.sayHi()" returns "Hey Wes"


//Callback Functions
//Click Callback

const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Clickin\'');
}
button.addEventListener('click', handleClick);
//whenever user clicks button, console will run wes.yellHi function


//can also pass an anonymous function in
button.addEventListener('click', function() {
    console.log('Nice job!');
});


//Timer Callback
setTimeout(wes.yellHi, 1000);

setTimeout(function() {
    console.log('Done! Time to eat!');
}, 2000);

setTimeout(() => {
    console.log('Eating!');
}, 3000);