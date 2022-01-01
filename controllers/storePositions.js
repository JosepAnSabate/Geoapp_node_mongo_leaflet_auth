const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = async (req, res) =>{
    if ((req.files && req.files.image)){   //https://stackoverflow.com/questions/56955171/cannot-read-property-image-of-null
        let image = req.files.image
        image.mv(path.resolve(__dirname, '..','public/img',image.name),
            async (error)=>{
                await BlogPost.create({
                    ...req.body,                // spread operator
                    image:'/img/' + image.name,
                    userid: req.session.userId  //userId is populated with the logged in user id in loginUser.js when a user logs in
                })
                res.redirect('/')
            }) 
    } else {
        await BlogPost.create({
            ...req.body, 
            userid: req.session.userId})
        res.redirect('/')
    
}}