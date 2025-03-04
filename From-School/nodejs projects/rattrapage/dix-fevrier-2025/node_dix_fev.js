/*const http = require('http');
const Serveur = http.createServer((req,res) => {
    res.write("Bonjour TDS");
    res.end();
});

Serveur.listen(3000, ()=> console.log("Serveur en marche"));*/

const express = require('express');
const app = express();
app.post('/add', ()=> {
    console.log("Add work!");
});

app.get('/getAll', ()=> { 
    console.log("Affichage ca marche!");
    app.end();
})

app.get('/delete', () => {
    console.log("Delete work!");
    app.end();
})

app.put('/update', () => {
    console.log("Mise a jour ca marche!");
    app.end();
})

app.listen(3000, ()=> console.log("Serveur work"));