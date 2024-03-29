const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = document.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'OMG dad.',
  'You are the worst',
  'Seriously',
  'Stop it.',
  'Please stop',
  'That was the worst one',
];

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');

  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not) {
    console.log('we used that one last time');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}


jokeButton.addEventListener('click', handleClick);
