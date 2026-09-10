import express from 'express';
import { formatDateYmdHis } from './utils/date.js';
import { generateRandomLetter, generateRandomNumber, generateRandomRockPaperScissors } from './utils/random.js';

const app = express();
const _PORT = 3000;

console.log('Starting random generator...');

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