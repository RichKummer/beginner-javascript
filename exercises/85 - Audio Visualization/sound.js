import { hslToRgb } from "./utils";

const WIDTH = 1500;
const HEIGHT = 1500;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError(err) {
    console.log('You need to give access to your mic');
}

async function getAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(handleError);
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyzer);
    // How much data should we collect?
    analyzer.fftSize = 2 ** 8; // ** is 'to the power of in JS'
    // pull the data off the audio
    // how many pieces of data are there?
    bufferLength = analyzer.frequencyBinCount;
    const timeData = new Uint8Array(bufferLength);
    const frequencyData =  new Uint8Array(bufferLength);
    console.log(frequencyData);
    drawTimeData(timeData);
    drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
    // inject time data into our timeData array
    analyzer.getByteTimeDomainData(timeData);
    // with data, lets turn it into a visual
    // first, clear canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // second, set up some canvas drawing
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#6A62FF';
    ctx.beginPath();
    const sliceWidth = WIDTH / bufferLength;
    let x = 0;
    timeData.forEach((data, i) => {
        const v = data / 128;
        const y = (v * HEIGHT) / 2;
        // draw our lines!
        if(i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        x += sliceWidth;
    });

    ctx.stroke();

    // call itself ASAP
    requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
    // 1. get frequency data into our frequencyData array
    analyzer.getByteFrequencyData(frequencyData);
    // 2. figure out bar width
    const barWidth = (WIDTH / bufferLength) * 2.5;
    console.log(barWidth);
    let x = 0;
    frequencyData.forEach(amount => {
        // 0 to 255. Need to figure out height it will be
        const percent = amount / 255;
        const [h,s,l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];
        const barHeight = HEIGHT * percent * 0.5;
        // convert color to HSL
        const [r,g,b] = hslToRgb(h, s, l);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(
            x,
            HEIGHT - barHeight,
            barWidth,
            barHeight
        );
        x += barWidth + 2;
    });



    requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();

