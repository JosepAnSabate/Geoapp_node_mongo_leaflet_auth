const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({ //schema represents how a collection looks like on atles
    title: String,
    body:String, // millor anomenar description
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  //referencia a User Model.
        required: true 
    },  
    datePosted: {/* can declare property type with an object like this beacuse we need 'default'*/
        type: Date,
        default: new Date()
    },
    image: String,
    location: {
        type: {
          enum: ['Point'], 
        },
        coordinates: {
          type: [Number],
          index: '2dsphere' // supports queries that calculate geometries
        }
      }
});

//blogPost is a collection on mongo
const BlogPost = mongoose.model('BlogPost', BlogPostSchema); 


module.exports = BlogPost;