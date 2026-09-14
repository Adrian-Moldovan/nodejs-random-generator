import express from 'express';
import { formatDateYmdHis } from './utils/date.js';
import { generateRandomLetter, generateRandomNumber, generateRandomRockPaperScissors } from './utils/random.js';

const app = express();
const _PORT = 3000;
const _LOGS_ACTIVE = true;

console.log('Starting random generator...');

function displayLog(req) {
    console.log(`=====================`)
    console.log(`New request received:`)
    console.log({
        method: req.method,
        endpoint: req.originalUrl,
        ip: req.ip
    });
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    _LOGS_ACTIVE && displayLog(req);

    next();
});

app.get('/', (req, res) => {
    res.json({
        appName: "Random generator",
        status: "Up and running!",
        availableEndpoints: [
            {
                url: "/number",
                description: "generate a random number"
            },
            {
                url: "/letter",
                description: "generate a random letter"
            },
            {
                url: "/rock-paper-scissors",
                description: "generate a random rock - papers - scissors option"
            }
        ]
    });
});


app.get('/number', (req, res) => {
    res.json({
        description: "Generates a random number",
        value: generateRandomNumber(),
        timestamp: formatDateYmdHis()
    });
})


app.get('/letter', (req, res) => {
    res.json({
        description: "Generates a random letter",
        value: generateRandomLetter(),
        timestamp: formatDateYmdHis()
    });
})


app.get('/rock-paper-scissors', (req, res) => {
    res.json({
        description: "Generates a rock - papers - scissors option",
        value: generateRandomRockPaperScissors(),
        timestamp: formatDateYmdHis()
    });
})


app.listen(_PORT, () => {
    console.log(`Server running on http://localhost:${_PORT}`);
});