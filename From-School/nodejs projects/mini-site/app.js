const http = require("http");
const express = require('express');
const res = require('express/lib/response');
const app  = express();

app.use((req, res, next) => {
    res.set('Content-Type": "text/plain; charset=utf8');
    next();
});

app.get('/', (req, res) => {
    res.send('Tout va à merveille');
});

app.use((req, res) => {
    res.status(404).send('Cette page n\'existe pas');
});

app.get('/test1', (req, res) => {
    res.send('Tout va à merveille pour cette page 1');
});

app.get('/essaixxx', (req, res) => {
    const xxx = req.params.xxx || 'xxx';
    res.send(`Tout va à merveille pour cette page' ${xxx}`);
});

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});