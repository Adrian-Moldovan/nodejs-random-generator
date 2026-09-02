import express from 'express';

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
            }
        ]
    });
});


app.get('/number', (req, res) => {
    res.json({
        description: "Generates a random number",
        value: Math.floor(Math.random() * 100)
    });
})


app.get('/letter', (req, res) => {
    res.json({
        description: "Generates a random letter",
        value: String.fromCharCode(65 + Math.floor(Math.random() * 26))
    });
})


app.listen(3000, () => {
    console.log(`Server running on http://localhost:${_PORT}`);
});