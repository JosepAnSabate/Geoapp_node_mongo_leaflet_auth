const BlogPost = require('../models/BlogPost.js')

module.exports = async (req,res) => {
  
    const id = req.params.id;//post;
    const title = req.title;
    const body = req.body;
    

    console.log(id)
    console.log('body', body)

    try {
        const BlogPostDB = await BlogPost.findByIdAndUpdate(
            id,  body, { useFindAndModify: false }
        )
        console.log(BlogPostDB)
        res.json({
            estado: true,
            mensaje: 'Position editada'
        })
       
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Position no editat'
        })
    }
}
