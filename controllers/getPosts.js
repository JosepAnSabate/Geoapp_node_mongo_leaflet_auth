const BlogPost = require('../models/BlogPost.js')

//getallposts
module.exports = async (req,res) => {
        if(req.session.userId){
            const sessionUserId = req.session.userId //user id 
            const blogposts = await BlogPost.find({userid: sessionUserId}).populate('userid')
            console.log(req.session)
           
            res.render('index', {
                blogposts,
                sessionUserId
            });
        } else {
        res.redirect('/auth/login')
    } 
}