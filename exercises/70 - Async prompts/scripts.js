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