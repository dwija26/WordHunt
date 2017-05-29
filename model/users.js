/**
 * Created by Raj Chandra on 4/12/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {
        type : String,
        unique: true,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    points: {
        type : String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model( 'users' , usersSchema );

//Show User's data
module.exports.getUser=function (callback,limit) {
    User.find(callback).limit(limit);
}

//Find user data by id
module.exports.getUserById=function (id, callback) {
    User.findById(id, callback);
}

//Verify the login
module.exports.verifyPassword = function (user, callback) {
    User.findOne({username: user.username}, function (err, details) {
        if (err) { //takes care of the error
            return callback(err, null);
        }
        else if(!details){//if the username is not found,detail has a null value
            console.log("Username is Incorrect");
            return callback(null,"Invalid User name");
        }
        else if(details.password === user.password) {
            console.log("Password is Incorrecst");
            return callback(null, null);
        }
        else{
            return callback(null,details);
        }
    });
}

//Add user data using Register
module.exports.addUser=function (user, callback) {
    user.points='100';
    User.create(user,callback);
}

//Update user data using id
module.exports.updateUser=function (id, user, options, callback) {
    var query = {_id:id};
    var update = {
        username: user.username,
        password: user.password
    }
    User.findOneAndUpdate(query, update, options ,callback);
}

//delete user data
module.exports.deleteUser = function (user, callback) {
    var query = {_id : id}
    User.remove(query,callback);
}