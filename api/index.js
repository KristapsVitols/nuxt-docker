const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/api', (req, res) => {
    res.send('hello world!');
});

app.get('/api/texts', (req, res) => {
    res.status(200).send({
        texts: [
            'Hello there sir!!!!!!!',
            'Hello there miss',
            'Hello there whatever',
            'Hello there forever',
            'Hello there never',
        ]
    })
});

app.listen(5000, () => console.log('API listening...'));