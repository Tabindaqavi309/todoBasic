const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRoutes = require('./todolist');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/todoList', productRoutes);
app.get('/', (req, res, result) => {
    res.status(200).json({
        message: 'Use /todoList to get and post the todo List.\nUse /todoList/id to update and delete the todo List.\nUse /todoList/id to get see what is in it'
    })
})
module.exports = app;