const express = require('express');
const fileUpload = require('express-fileupload')
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const articleRouter = require('./routes/articleRouters.js')
const userRouter = require('./routes/userRouters.js')
const articleAIRouter = require('./routes/articleAIRouter.js')
const authentication = require('./routes/authentication.js')
const passport = require('passport')
const session = require('express-session');
const cookieParser = require('cookie-parser')
const p = require('./modules/passpost.js')

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dupsdtrvy',
    api_key: '943628789833962',
    api_secret: 'xsn2ONslaeDRYZS3ojFuxG74fA0'
});


app.use(fileUpload({
    useTempFiles : true,
    limits: {fileSize: 50 * 2024 * 1024}
}));

app.use(cookieParser())
app.use(session({
    secret: "myscret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    },
}))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type'],
}))
// config middleware using req.body
app.use(express.json())
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session());

// handle
p(passport)

app.use('/api/v1/article', articleRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/articleAI', articleAIRouter);
app.use('/api/v1/user', authentication)

app.post("/upload/cloud", async(req, res) => {
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "images"
    })

    res.json(result)
})
module.exports = app;