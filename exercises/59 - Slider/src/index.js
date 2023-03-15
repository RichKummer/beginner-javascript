function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in!');
  }
  // create vars for working with slider
  let current;
  let prev;
  let next;

  // select elements needed for slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  // when slider is created, run this function (a constructor)
  startSlider();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
