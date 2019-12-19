const http = require('http');
const express = require('express');
const app = express();
const port = 8080;

const lines = [
    { numero: 1, votes: [
        { hour: 1, number: 0 },
        { hour: 2, number: 0 },
        { hour: 3, number: 0 },
        { hour: 4, number: 0 },
    ] },
    { numero: 2, votes: [
        { hour: 1, number: 5 },
        { hour: 2, number: 10 },
        { hour: 3, number: 2 },
        { hour: 4, number: 0 },
    ] },
    { numero: 3, votes: [
        { hour: 1, number: 0 },
        { hour: 2, number: 0 },
        { hour: 3, number: 0 },
        { hour: 4, number: 0 },
    ] },
    { numero: 7, votes: [
        { hour: 1, number: 0 },
        { hour: 2, number: 0 },
        { hour: 3, number: 0 },
        { hour: 4, number: 0 },
    ] },
    { numero: 9, votes: [
        { hour: 1, number: 0 },
        { hour: 2, number: 0 },
        { hour: 3, number: 0 },
        { hour: 4, number: 0 },
    ] },
    { numero: 18, votes: [
        { hour: 1, number: 0 },
        { hour: 2, number: 0 },
        { hour: 3, number: 0 },
        { hour: 4, number: 0 },
    ] }
];

const accounts = [
    { email: 'thomas@gmail.com', password: '1234' }
];

http.createServer(app);
const server = app.listen(port, console.log('Serveur lancé !'))

app.get('/', (req, res) => {
    res.end('Le serveur marche bien !');
});

app.post('/index', (req, res) => {
    console.log('Requête faite')
    console.log(req.headers)
    res.json(lines);
});

app.post('/connection')

const checkConnection  = (email, password) => {
    return accounts.filter(account => account.email === email && account.password === password).length;
}
