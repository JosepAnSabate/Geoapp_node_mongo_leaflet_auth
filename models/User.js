const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Introduïu el nom d'usuari o correu electrònic"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Introduïu la contrasenya"],
    }
});

// Now when we try to save a user the unique validator 
// will check for duplicate db entries and report them just like any oher validating error
UserSchema.plugin(uniqueValidator); 

UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10,(error, hash)=>{
        user.password = hash
        next()
    })
})

//Export model
const User = mongoose.model('User',UserSchema);
module.exports = User;
