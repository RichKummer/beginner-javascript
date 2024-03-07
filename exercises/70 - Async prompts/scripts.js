// make prompt function
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    // remove popup entirely
    popup.remove();
    popup = null;
}

function ask(options) {
    return new Promise(async function(resolve) {
        // First we need to create a popup with all the fields in it
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
                <label>${options.title}</label>
                <input type="text" name="input" />
                <button type="submit">Submit</button>
            </fieldset>

        `);

        // check if they want a cancel button
        if(options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            popup.firstElementChild.appendChild(skipButton);

            // listen for click on that cancel button
            skipButton.addEventListener('click', function() {
                resolve(null);
                destroyPopup(popup);
            }, {once: true}
            );
        }

        // listen for submit event on the inputs
        popup.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Submitted');
            resolve(e.target.input.value);

            // remove from DOM entirely
            destroyPopup(popup);
        }, { once: true });

        // when someone does submit, we want to resolve the data that was in the input

        // insert that popup into the DOM
        document.body.appendChild(popup);

        // put very small timeout before adding open class to get transition
        await wait(50);
        popup.classList.add('open');



    });
}

// select all buttons that have a question
async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset;

    const answer = await ask({
        title: button.dataset.question,
        cancel,
    });
    console.log(answer);
}

const buttons = document.querySelectorAll('[data-question');
buttons.forEach(button => button.addEventListener('click', askQuestion));

console.log(buttons);

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?', cancel: true },
    {title: 'What is your dogs name?'},
];

// utility function for asnyc mapping
async function asyncMap(array, callback) {
    // make an array to store results
    const results = [];

    // loop over our array
    for(const item of array) {
        results.push(await callback(item));
    }

    // when done with loop, return it
    return results;

}

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

go();

// async function askMany() {
//     for (const question of questions) {
//         const answer = await ask(question);
//         console.log(answer);
//     }
// }

// askMany();