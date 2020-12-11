const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = document.createElement('ul');

const item1 = document.createElement('li');
item1.textContent = 'One';
ul.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'Two';
ul.appendChild(item2);

const item3 = document.createElement('li');
item3.textContent = 'Three';
ul.appendChild(item3);

div.insertAdjacentElement('afterbegin', ul);

const img = document.createElement('img');

img.alt = 'Cute Puppy';
img.width = `250`;
img.classList.add('cute');
img.src = `https://source.unsplash.com/random/300x300`;
img.classList.add('cute');
div.appendChild(img);


const myHTML = `
    <div class="myDiv">
        <p class="p1">Sample paragraph 1</p>
        <p>Sample paragraph 2</p>
    </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', myHTML);
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);

function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
        `
    return html;
}

const cards = document.createElement('div');
cards.classList.add('cards');
let cardsHTML = generatePlayerCard('rich', 32, 6);
cardsHTML += generatePlayerCard('michael', 36, 7);
cardsHTML += generatePlayerCard('tim', 34, 9);
cardsHTML += generatePlayerCard('mike', 33, 6);
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));