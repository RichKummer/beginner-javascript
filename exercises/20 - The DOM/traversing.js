const wes = document.querySelector('.wes');

console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastELementChild);
console.log(wes.previousElementSibling);
//select element above it in the code.
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
//selects next parent element. Can call this multiple times to go higher.


const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
document.body.appendChild(p);