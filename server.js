const express = require("express");
const app = express();
const path = require('path'); 
const ejs = require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash'); //flashing error message from session
const cors = require('cors')
// load enviornment variables
const dotenv = require("dotenv");
dotenv.config({ path: './config/config.env'});

const BlogPost = require('./models/BlogPost'); 
const validateMiddleware = require("./middleware/validationMiddleware");

const storePositionsController = require('./controllers/storePositions');

const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware =require("./middleware/redirectIfAuthenticatedMiddleware");


mongoose.connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('DataBase connected'))
    .catch(e => console.log(e))

//listen errors on connection
mongoose.connection.on('error', err => {
    console.log(err)
});

app.set('view engine', 'ejs');

// declare a blobal var loggedIn that will be accessible
// from all ejs files. All will have acces lo loggedIn to 
// alter the navigation bar.
global.loggedIn = null; 

//bodyparser deprecated
app.use(express.urlencoded({extended: true})); // formulari
app.use(express.json()) // To parse the incoming requests with JSON payloads, fetch
app.use(express.static('public')); 
app.use(fileUpload());
app.use('/positions/store',validateMiddleware);  //Check the fields that need to be written to sent a post
app.use(cors()); // enable cors
// register the expressSession middleware in our app and pass ina a config. object
// with a value to secret property. Secret string is used by the express session package to sign and encrypt the session id
// you can of course provide your own secret string
app.use(expressSession({
    secret: 'some secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 24 // Equals 1 day
    }
}))
app.use(flash()); // express session
// we specify with the wildcard*, that on all requests, this
// middleware should be executed. In it we assign loggedIn 
// to req.session.userId
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId
    next()
})

///////////////////////////////
// initializating the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
    console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// routes from routes.js
app.use('/', require('./router/routes'));

// 404, use indica k estem usant middleware
app.use((req, res)=> res.render('notfound'));

