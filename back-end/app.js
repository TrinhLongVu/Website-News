const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/articleRouters.js')
const userRouter = require('./routes/userRouters.js')

// config middleware using req.body
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/article', tourRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;