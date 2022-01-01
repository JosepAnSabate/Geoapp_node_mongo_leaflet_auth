module.exports = (req, res, next) =>{
    // if(req.files == null || req.body.title == null || req.body.title == null){
    if(req.body.title.length < 2){
        // I can sent a messages like authMiddleware
        return res.redirect('/positions/new')
        }
    next()
}



/////MIDDKEWARE//////
// Validation middleare, checks if any of the form fiels are null
// const validateMiddleWare = (req,res,next) =>{
//     if(req.files == null || req.body.title == null){
//         return res.redirect('/posts/new')
//     }
//     next()
// }