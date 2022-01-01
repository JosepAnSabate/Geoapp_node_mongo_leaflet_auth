const BlogPost = require('../models/BlogPost.js')

module.exports = async (req,res) => {
    const myblogpost = await BlogPost.find({userid: req.params.userid}).populate('userid');
    
    console.log(myblogpost)
    res.render('myposts', {
        myblogpost
    });
}