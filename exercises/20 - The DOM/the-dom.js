/*
const p = document.querySelector('p');
const img = document.querySelectorAll('.item img');
const item2 = document.querySelector('item2');
const heading = document.querySelector('h2');
console.log(heading.textContent);

//set the textContent property on the element.
heading.textContent = 'Wes is cool';
console.dir(heading.textContent);
console.log(heading.innerText);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

//pizzaList.textContent = `${pizzaList.textContent} 1`;
pizzaList.insertAdjacentText('beforeend', '1');

*/

//Classes
const pic = document.querySelector('.nice');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt) // getter
console.log(pic.naturalWidth); // getter only
//You have to wait for image to be downloaded before we know how large it is. Running this from JS gives you '0' while running in browser gives you the real amount. 

pic.setAttribute('alt', 'Really cute pup'); //setter
console.log(pic.getAttribute('alt')); //getter

const custom = document.querySelector('.custom');
console.log(custom.dataset);