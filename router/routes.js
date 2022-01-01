const express = require('express');
const app = express();
const router = express.Router();

const BlogPost = require('../models/BlogPost'); 
const validateMiddleware = require("../middleware/validationMiddleware");

const getAllPositionsController = require('../controllers/getAllPositions')

const newPositionsController = require('../controllers/newPositions'); // get the new page, not the post
const storePositionsController = require('../controllers/storePositions'); //POST

const getPostsController = require('../controllers/getPosts');
const getPositionController = require('../controllers/getPosition');
const newUserController = require('../controllers/newUser');
const storeUserController = require('../controllers/storeUser')
const loginController = require('../controllers/login')
const loginUserController = require('../controllers/loginUser');
const logoutController = require('../controllers/logout');
const deletePositionsController = require('../controllers/deletePositions');


const updatePositionsController = require('../controllers/updatePositions');


const getUserPositionsController = require('../controllers/getUserPositions');

const authMiddleware = require("../middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware =require("../middleware/redirectIfAuthenticatedMiddleware");

// middleware
app.use('/posts/store',validateMiddleware);  //Check the fields that need to be written to sent a post

//Registration
router.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
router.post('/users/register', storeUserController);
//Login
router.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
router.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
//Logout
router.get('/auth/logout', logoutController)

//CRUD ==> Create Read Update Delete
router.get('/', getPostsController); //home page get my posts
// GET ONE 
router.get('/position/:id', getPositionController);
//GET USERS POST
router.get('/positions/user/:userid', authMiddleware ,getUserPositionsController)
//GET ALL POSTS
router.get('/positions/all', authMiddleware, getAllPositionsController)
// POST
router.post('/positions/store', authMiddleware, storePositionsController); //fetched from form
router.get('/positions/new', authMiddleware, newPositionsController); // getting the page

//DELETE
router.delete('/positions/delete/:id', authMiddleware, deletePositionsController)
//UPDATE
router.put('/positions/update/:id', authMiddleware, updatePositionsController)



// other pages routes 
router.get('/about', (req,res) => { res.render('about'); });  // sense controller



module.exports =  router;