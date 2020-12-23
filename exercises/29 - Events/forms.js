const rich = document.querySelector('.rich');

rich.addEventListener('click', function(addEventListener) {

    console.log('You clicked it');
    const shouldChangePage = confirm('this website might be malicious! Do you want to proceed?');
    if(!shouldChangePage) {
        event.preventDefault();
    }
    console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]')

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('Sorry bruh');
        event.preventDefault();
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent)
signupForm.name.addEventListener('keydown', logEvent)
signupForm.name.addEventListener('focus', logEvent)
signupForm.name.addEventListener('blur', logEvent)

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'


const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);