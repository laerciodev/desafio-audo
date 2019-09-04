const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://laercio:0qmb0BTAzOede0Zo@cluster0-rqkan.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, console.log('Executando em http://localhost:3000'))

