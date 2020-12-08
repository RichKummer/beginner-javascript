console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Random image`;
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const myItem = document.createElement('li');
myItem.textContent = 'Three';
myList.appendChild(myItem);
document.body.insertAdjacentElement('afterbegin', myList)

const myItem5 = document.createElement('li');
myItem5.textContent = 'Five';
myList.appendChild(myItem5);

const myItem1 = myItem5.cloneNode(true);
myItem1.textContent = 'One';
myList.insertAdjacentElement('afterbegin', myItem1);

const myItem4 = document.createElement('li');
myItem4.textContent = 'Four';
myItem5.insertAdjacentElement('beforebegin', myItem4);

const myItem2 = document.createElement('li');
myItem2.textContent = 'Two';
myItem.insertAdjacentElement('beforebegin', myItem2);