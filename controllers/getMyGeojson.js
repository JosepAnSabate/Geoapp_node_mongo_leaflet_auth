const BlogPost = require('../models/BlogPost.js')


module.exports = async (req,res) => {

    const sessionUserId = req.session.userId

    const geojson = await BlogPost.find({userid: sessionUserId}).populate('userid');

    console.log(geojson)
    res.json(geojson)
}