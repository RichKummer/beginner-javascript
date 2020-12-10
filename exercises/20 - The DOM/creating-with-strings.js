const item = document.querySelector('.item');

const width = `300x300`;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute pup <h1>love this guy</h1>`;
const myHTML = `
    <div class = "wrapper">
        <h2>Cute ${desc}</h2>
        <img src = "${src}" alt="${desc}"/>
    </div>
`;

//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
//creates element, but it is not on the page yet.

document.body.appendChild(myFragment);
//now appending to the document to appear in the HTML.
