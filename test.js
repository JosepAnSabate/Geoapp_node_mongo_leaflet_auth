const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser: true});

BlogPost.create({
    title: 'Titolprova 1',
    body: 'ccccccccccccccccccccccvccvcvcvcc'
},(error,blogspot)=>{
         console.log(error,blogspot)
 })
var id = "605d16b1b0e8f94779dacaea"

// BlogPost.find({}, (error, blogspot) => {
//     console.log(error, blogspot)
// })
  BlogPost.findByIdAndDelete(id,{
      title:'Titolprova 1'
  },(error,blogspot)=>{
      console.log(error,blogspot)
  });