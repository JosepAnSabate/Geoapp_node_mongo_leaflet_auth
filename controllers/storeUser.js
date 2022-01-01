const User = require('../models/User.js')
const path = require('path')

module.exports = (req,res) =>{
    User.create(req.body, (error, user) =>{
         if(error){
           const validationErrors =  Object.keys(error.errors).map(key =>
              error.errors[key].message)
          // req.session.validationErrors = validationErrors 
          req.flash('validationErrors', validationErrors)
           //with the flash middleware all the req will have a req.flah() 
           //function that can be used for flash messages
         
            req.flash('data', req.body)
           return res.redirect('/auth/register')    
         }        
        res.redirect('/')
    })
}