const butts = document.querySelector('.butts');

const coolButton = document.querySelector('.cool');

const hooray = () => console.log('HOORAY!');

function handleClick() {
    console.log('It got clicked!')
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    console.log('you clicked a button!');
    const button = event.target;
    //console.log(button.textContent);
    //console.log(parseFloat(event.target.dataset.price));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
    //Stop this event from bubbling up/propogating
    event.stopPropagation()
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function() {
    console.log(event.target);
    console.log(event.BUBBLING_PHASE);
    console.log(event.bubbles);
    }, 
    { capture: true}
);

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", function(e) {
  console.log(e.currentTarget);
  console.log(this);
});


/* Lesson 29
function buyItem() {
    console.log('buying item!');
}

function handleBuyButtonClick(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
}

//buyButtons.forEach(handleBuyButtonClick);
buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('You clicked it!');
    });
});

*/