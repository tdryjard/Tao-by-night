const http = require('http');
const express = require('express');
const app = express();
const port = 8080;

const createLines = () => {
    return [
        { numero: 1, votes: [
            { hour: 1, number: 0 },
            { hour: 2, number: 0 },
            { hour: 3, number: 0 },
            { hour: 4, number: 0 },
        ] },
        { numero: 2, votes: [
            { hour: 1, number: 0 },
            { hour: 2, number: 0 },
            { hour: 3, number: 0 },
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
    ]
}

// Samedi 21, Vendredi 27
const dates = {
    '21-12-2019': { lines: createLines() },
    '22-12-2019': { lines: createLines() },
    '23-12-2019': { lines: createLines() },
    '24-12-2019': { lines: createLines() },
    '25-12-2019': { lines: createLines() },
    '26-12-2019': { lines: createLines() },
    '27-12-2019': { lines: createLines() }
};

const accounts = [
    { email: 'thomas@gmail.com', password: '1234', help: true }
];

http.createServer(app);
const server = app.listen(port, console.log('Serveur lancé !'))

app.get('/', (req, res) => {
    res.end('Le serveur marche bien !');
});

app.post('/vote', (req, res) => {
    const { datetime } = req.headers;
    res.json(dates[datetime].lines[2]);
});

app.post('/apply-vote', (req, res) => {
    console.log(req.headers)
    let { datetime, votes, numero } = req.headers;
    votes = votes.split(",").map(vote => parseInt(vote));

    const getVotes = dates[datetime];
    for (let element in dates) {
        if (element === datetime) {
            const line = dates[element].lines.find(line => line.numero === parseInt(numero))
            const stockedVotes = line.votes;
            for (let i = 0; i < stockedVotes.length; i++) {
                stockedVotes[i].number += votes[i];
                console.log(stockedVotes[i])
            }
            line.votes = stockedVotes;
            console.log(line)
            res.json(line.votes);
        }
    }
});

app.post('/login', (req, res) => {
    const headers = req.headers;
    console.log(headers)
    res.json({
        user: checkConnection(headers.email, headers.password)
    });
});

app.post('/sign', (req, res) => {
    const headers = req.headers;
    accounts.push({email: headers.email, password: headers.password});
})

const checkConnection  = (email, password) => {
    return accounts.find(account => account.email === email && account.password === password);
}
