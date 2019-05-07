const express = require('express');
const cors = require('cors');
const app = express();

const {Pool} = require('pg');
const pgClient = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGHOST,
    port: process.env.PGPORT,
});

pgClient.on('error', () => console.log('PG connection fucked...'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS texts(text varchar)')
    .catch(err => console.log(err));

app.use(cors());


app.get('/api', (req, res) => {
    res.send('hello world!');
});

app.get('/api/texts', async (req, res) => {
    const rows = await pgClient.query('SELECT * FROM texts');
    res.status(200).send({
        texts: rows.rows,
    })
});

app.get('/api/add-text', async (req, res) => {
    await pgClient.query('INSERT INTO texts(text) VALUES($1)', [Math.random().toString(36).substring(7)]);

    res.status(200).send({
        message: 'success!!!',
    });
});

app.get('/api/delete-texts', async (req, res) => {
    await pgClient.query('DELETE FROM texts');

    res.status(200).send({
        message: 'deleted!!!',
    });
});

app.listen(5000, () => console.log('API listening...'));