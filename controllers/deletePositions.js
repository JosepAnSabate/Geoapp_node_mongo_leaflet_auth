const BlogPost = require('../models/BlogPost.js')

module.exports = async (req,res) => {
    const id = req.params.id;
    // id is id position not id user
   await BlogPost.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/'})
        })
        .catch(err => {
            console.log(err);                                                                
        })
}