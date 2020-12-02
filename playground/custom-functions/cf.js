

//passing paramaters in the parentheses
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    //function body
    console.log(billAmount, taxRate = 0.13);
    console.log('running calculate bill!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

//Function call (or run)
// myTotal is a new constant created to preserve that value, otherwise it is garbage-collected.

const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);

function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Wes');
console.log(greeting);

//functiont takes in a value - variables, values, or in this case an expression.
const kait = 100;
const myTotal3 = calculateBill(kait + 50, 0.15);


//Here we use the same parameter twice which is okay - they are only available inside each function. 
function doctorize(name) {
    return `Dr. ${name}`;
}

//Here we set a default in case the user does not enter anything for yell()
function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}
//returns 'HEY SILLY GOOSE'

yell(doctorize('wes'));
//returns 'HEY DOCTOR WES'


//To default, you must pass in 'undefined', you can't pass in nothing or another value
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
