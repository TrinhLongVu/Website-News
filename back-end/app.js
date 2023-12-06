const express = require('express');
const app = express();
const morgan = require('morgan');
const articleRouter = require('./routes/articleRouters.js')
const userRouter = require('./routes/userRouters.js')
const articleAIRouter = require('./routes/articleAIRouter.js')

// config middleware using req.body
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/article', articleRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/articleAI', articleAIRouter);

module.exports = app;