// exporting module

// this const is scoped to the module, it's not available elsewhere but can only be used in this file.
// you can also export this variable if you wanted it to be available elsewhere.
const last = 'bos';
const middle = 'slam dunk';
const first = 'rich';

export function returnHi(name) {
    return `hi ${name} ${last}!`;
}

// named exports – you can have as many as we want
export { last, middle };

export default first;