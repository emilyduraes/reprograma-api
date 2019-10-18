const express = require('express');

const server = express();

const usuarios = ['Emily', 'Roberta', 'Aline', 'Mara', 'Francielle', 'Fernada', 'Camila', 'Nataly', 'Marcia'];

const books = ['Livro 1', 'Livro 2', 'Livro 3', 'Livro 4', 'Livro 5', 'Livro 6', 'Livro 7', 'Livro 8', 'Livro 9'];

function checkUserArray(req, res, next){
    const user = usuarios[req.params.username];
    if(!user){
        return res.status(400).json({error: `Index doesn't exists.`});
    }
    req.user = user;
    return next();
}

function checkBookArray(req, res, next){
    const book = books[req.params.book];
    if(!book){
        return res.status(400).json({error: `Index doesn't exists.`})
    }
    req.book = book;
    return next();
}

server.get('/', function (req, res) {
    return res.send('Hello World! :)');
})

server.get('/usuario', (req, res) => {
    return res.json(usuarios);
})

server.get('/usuario/:username', checkUserArray, (req, res) => {
    // let id = req.params.username;
    return res.json(req.user);
})

server.get('/books', (req, res) => {
    return res.json(books);
})

server.get('/books/:book', checkBookArray, (req, res) => {
    // return res.send(books[req.params.book]);
    return res.json(req.book);
})

server.get('/users/:username/books/:book', (req, res) => {
    const { username, book } = req.params;
    // return res.json(usuarios[username] + ", " + books[book]);
    let obj = {};
    obj.username = usuarios[username];
    obj.book = books[book];
    return res.json(obj);
})

server.get('/country', (req, res) => {
    res.send(req.query);
})

server.listen(3000);