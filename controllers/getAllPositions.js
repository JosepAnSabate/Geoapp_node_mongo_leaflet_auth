const BlogPost = require('../models/BlogPost.js')



//getallposts
module.exports = async (req,res) => {
    const blogposts = await BlogPost.find({}).populate('userid')
    console.log(req.session)
    const sessionUserId = req.session.userId //user id for my posts
    res.render('allposts', {
        blogposts,
        sessionUserId
    });
}