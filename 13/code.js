let btn = document.getElementById('btnid');
btn.addEventListener('click', buttonOfDoom);

async function sleep() {
    let delay = 80;
    await new Promise(resolve => setTimeout(resolve, delay));
}

async function buttonOfDoom() {
    const figure = document.querySelector('#output');
    
    let text = '';

    for (let i = 0; i < 500; i++) {

        // ~ gen a random number
        const randomNum = Math.floor(Math.random() * 999999);

        // ~ gen a random hex color for that number 
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        // ~ gen a random font size
        const randomSize = Math.floor(Math.random() * 30) + 10;

        // ~ create a span for this number with random color and size 
        const span = document.createElement('span');
        span.textContent = randomNum;
        span.style.color = randomColor;
        span.style.fontSize = randomSize + 'px';
        span.style.whiteSpace = 'normal';
        span.style.display = 'inline';

        // ~ append the random number 
        figure.appendChild(span);

        // ~ delay 
        await sleep();

        // ~ add the DOOM text dillimeter (with random styling!) 
        const doomDill = document.createElement('span');
        doomDill.textContent = 'DOOM';
        doomDill.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        doomDill.style.fontSize = Math.floor(Math.random() * 30) + 10 + 'px';
        doomDill.style.display = 'inline';
        doomDill.style.marginLeft = '4px';
        doomDill.style.marginRight = '4px';

        // ~ append doom text
        figure.appendChild(doomDill);
    }
}
