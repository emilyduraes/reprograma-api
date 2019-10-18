const express = require('express');

const server = express();

const usuarios = ['Emily', 'Roberta', 'Aline', 'Mara', 'Francielle', 'Fernada', 'Camila', 'Nataly', 'Marcia'];

const books = ['Livro 1', 'Livro 2', 'Livro 3', 'Livro 4', 'Livro 5', 'Livro 6', 'Livro 7', 'Livro 8', 'Livro 9'];

server.get('/', function (req, res) {
    return res.send('Hello World! :)');
})

server.get('/usuario', (req, res, next) => {
    return res.json(usuarios);
})

server.get('/usuario/:username', (req, res, next) => {
    let id = req.params.username;
    return res.send(usuarios[id]);
})

server.get('/books', (req, res, next) => {
    return res.json(books);
})

server.get('/books/:book', (req, res, next) => {
    return res.send(books[req.params.book]);
})

server.get('/users/:username/books/:book', (req, res, next) => {
    const { username, book } = req.params;
    // return res.json(usuarios[username] + ", " + books[book]);
    let obj = {};
    obj.username = usuarios[username];
    obj.book = books[book];
    return res.json(obj);
})

server.get('/country', (req, res, next) => {
    res.send(req.query);
})

server.listen(3000);