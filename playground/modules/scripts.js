// named imports – must export first from other file
// must also be runniung a server (live server VSCode extension)
// you can rename something you import by "returnHi as sayHi"
import first, { returnHi as sayHi, last, middle } from './utils.js';
import { handleButtonClick } from './handlers.js';
// the import here can be named anything, since there's only one default export
import wes from './wes.js';

// console.log(wes);

// console.log(first);

// const name = 'wes';

// console.log(sayHi(name));

// console.log(last, middle);

const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);


