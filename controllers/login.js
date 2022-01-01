module.exports = (req,res) =>{
    res.render('login', {
        errors: req.session.validationErrors
        
    })
}