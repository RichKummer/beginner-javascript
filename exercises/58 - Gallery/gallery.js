function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found!');
  }
  // the elements needed
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening modal...');
    // first check if modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return; // stops function from running
    }
    modal.classList.add('open');

    // Event Listeners to be bound when modal opened
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  Gallery.prototype.closeModal = function() {
    modal.classList.remove('open');
    //to do: add event listeners for clicks and keyboard!
    window.removeEventListener('keyup', this.handleKeyUp);
    nextButton.removeEventListener('click', this.showNextImage);
    prevButton.removeEventListener('click', this.showPrevImage);
  }

  Gallery.prototype.handleClickOutside = function(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  Gallery.prototype.handleKeyUp = function(event) {
    if (event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImage();
    if (event.key === 'ArrowLeft') return this.showPrevImage();
  }

 Gallery.prototype.showNextImage = function() {
    this.showImage(this.currentImage.nextElementSibling || gallery.firstElementChild);
  }

  Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling || gallery.lastElementChild);
  }

  Gallery.prototype.showImage = function(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    this.openModal();
  }

  // Event listenders

  images.forEach(this.image => 
    image.addEventListener('click', e => showImage
    (e.currentTarget))
  );

  // loop over each image
  images.forEach(image => {
    // attach event listener
    image.addEventListener('keyup', e => {
      // when key up, check if enter
      if (e.key === 'Enter') {
        // if true, then show image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
