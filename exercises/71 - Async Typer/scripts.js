function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(Math.random() * (max - min) + min);
}

// async for of loop
// async function draw(el) {
//     const text = el.textContent;
//     let soFar = '';
//     for(const letter of text) {
//         soFar += letter;
//         el.textContent = soFar;

//         // wait for some amount of time
//         const { typeMin, typeMax } = el.dataset;
//         const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//         await wait(amountOfTimeToWait);
//     }
// }

// recursion variant
function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset;
    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index = index + 1;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        // exit condition
        await wait(amountOfTimeToWait);
        if(index <= text.length) {
            drawLetter();
        }
    }
    // when this function draw() runs kick off drawLetter
    drawLetter();
}


document.querySelectorAll('[data-type]').forEach(draw);

