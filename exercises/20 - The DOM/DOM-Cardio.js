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

const myHTML = `
    <div class = "wrapper">
        <p class="p1">Sample paragraph 1</p>
        <p>Sample paragraph 2</p>
    </div>
`;

div.insertAdjacentElement('beforebegin', myHTML);
p1.remove();
