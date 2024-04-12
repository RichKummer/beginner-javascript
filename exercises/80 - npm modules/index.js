import wait from 'waait';
import { faker } from '@faker-js/faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';


const diff = formatDistance(
    new Date(1986, 3, 4, 11, 32, 0),
    new Date(1986, 3, 4, 10, 32, 0),
    { addSuffix: true }
);
console.log(diff);

const date = new Date();

const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);


console.log(` Hello ${faker.name.firstName()}`);

async function go() {
    console.log('going!');
    await wait(200);
    console.log('ending!');
}

async function getJoke() {
    const { data } = await axios.get('https://icanhazdadjoke.com',
{
    headers: {
        Accept: 'application/json',
    }
});
console.log(data);
}

getJoke();

go();

const a=[1,2,3,4,5,6,7,8,9,10];
const b=[5,3,8,3,7,453,34];

const sameValues = intersection(a, b);

console.log(sameValues);

const person1 = { name: 'wes'};
const person2 = { name: 'wes'};

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
    return new Promise(function(resolve, reject) {
        if (firstName === 'Wes') {
            resolve('Cool name!');
            return;
        }
        reject(new Error('not a kewl name'));
    });
}

async function checkName() {
    const [err, successValue] = await to (checkIfNameIsCool('Wes'));
    if(err) {
        console.log(err);
    } else {
        console.log(successValue);
    }
}

checkName();