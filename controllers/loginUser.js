const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req,res) =>{
    const { username,password } = req.body
    try {
        User.findOne({username: username},function(error,user){        
            if(user){
                // compare its more safe than ===, timing attack
                bcrypt.compare(password, user.password, (error,same)=>{
                   
                    if(same){
                        req.session.userId = user._id // we assign a user id to the session (cookies), this is how we know if a user is logged in
                        res.redirect('/')
                    } else{
                         let validateErrors =  "Contrasenya incorrecta"          
                      req.session.validationErrors = validateErrors
    
                    res.redirect('/auth/login')             
                    }
                })
            }  else if (!username || !password) {
                let validateErrors =  "Introduïu nom i contrasenya"          
                req.session.validationErrors = validateErrors
    
                res.redirect('/auth/login')
            } else {
                //console.log("/auth/login::",user)
                //res.redirect('/auth/login')
                const validateErrors =  "Usuari no registrat"          
                req.session.validationErrors = validateErrors
                res.redirect('/auth/login')
            }
        })
    } catch (error) {
        console.log(error)
    }
    
    
}