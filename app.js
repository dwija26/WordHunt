var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('client-sessions');
var bcrypt = require('bcryptjs');
var assert = require('assert');
var mongoose = require('mongoose');
var User = require('./model/users');
var sessions = require('client-sessions');

var index = require('./routes/index');
var about = require('./routes/about');


var app = express(); //object to use express

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'icon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); //as a middleware so must use this !!
app.use(express.static(__dirname+'/public'));

app.use('/', index);
app.use('/about', about);


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sessions({
    cookieName: 'session',
    secret:"wiywtekfdgldk2635273smdgs685",
    duration: 7 * 24 * 60 * 60 * 1000
}));

app.use(function (req,res,next) {
    if(req.session && req.session.user) {
        User.findOne({username: req.session.username}, function (err, user) {
            if (user) {
                req.user = user;
                delete req.user.password;
                req.session.user = req.user;
                res.locals.user = req.user;
            }
            next();
        });
    }
        else{
        next();
    }
});

function requireLogin(req,res,next) {
    if(!req.user){
        res.redirect('/login.html');
    }else{
        next();
    }
};

//CREATING A DATA BASE OBJECT

var db = mongoose.connection;

//CREATING ROUTES FOR THE QUERIES

// <---- This is for Sign  ---->
app.post('/register',function (req,res) {
    var user = req.body;
    var hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    user.password = hash;
    User.addUser(user, function (err) {
        if(err){
            res.redirect('/register.html');
        }
        else{
            res.redirect('/login.html');
            // res.json(user);
        }
    });
});

// <---- This is for Login Verification  ---->

app.post('/verify', function (req,res) {
    var user=req.body;
    User.verifyPassword(user, function (err,call) {
        if (err) {
            res.redirect('/login.html');
        }
        if((!call)) {//if everything is correct
            // req.session.user = user;
            res.redirect('/wordhunt');
        }
        if(call){//if username or the password is wrong
            res.write('<h1> Invalid Password.</h1>');
            res.end('<a href="login.html">Try Again</a>');
            // res.redirect('/login.html');
        }
    });
});

app.get('/wordhunt',requireLogin,function(req,res){
    res.redirect('/wordhunt.html');
});
app.get('/admin',requireLogin,function(req,res){
    res.redirect('/admin.html');
});
app.get('/leaderboard',requireLogin,function(req,res){
    res.redirect('/leaderboard.html');
});
app.get('/achievements',requireLogin,function(req,res){
    res.redirect('/achievements.html');
});
app.get('/profile',requireLogin,function(req,res){
    res.redirect('/profile.html');
});
app.get('/players',requireLogin,function(req,res){
    res.redirect('/users.html');
});

// <---- This is for showing users to Admin ---->NEED TO MAKE ADMIN LOGIN
app.get('/users',function (req,res) {
    User.getUser(function (err, users) {
        if(err){
            throw err;
        }
        res.json(users);
    });
});
// <---- HTML display of the Users
app.get('/userdata',function (req,res) {
        res.sendFile(__dirname + '/public/users.html');
});

// <---- This is for find users by Id (for ADMIN) ---->
app.get('/find-user/:_id',function (req,res) {
    User.getUserById(function (err, user) {
        if(err){
            throw err;
        }
        res.json(user);
    });
});


// <---- This is for updating a player---->
app.put('/update/:_id',function (req,res) {
    var id=req.params._id;
    var user=req.body;
    User.updateUser(id,user,{}, function (err, user) {
        if(err){
            throw err;
        }
        res.json(user);
    });
});

// <---- This is for removing users by Admin or User themselves ---->
app.delete('/delete/:_id',function (req,res) {
    var id=req.params._id;
    console.log(id);
    User.removeUser(id, function (err, user) {
        if(err){
            throw err;
        }
        res.json(user);
    });
});

//<--------THis is for LOGOUT----->
app.post('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/index.html');
        }
    });

});

//SENDS HTML RESPONSE
//
// app.get('/index.html',function (req,res) {
//     res.sendFile(__dirname + '/players/views/index.html');
// });
// app.get('/transit.html',function (req,res) {
//     res.sendFile(__dirname + '/players/views/transit.html');
// });
// app.get('/single_player.html',function (req,res) {
//     res.sendFile(__dirname + '/players/views/single_player.html');
// });
// app.get('/login.html',function (req,res) {
//     res.sendFile(__dirname + '/players/views/login.html');
// });
// app.get('/signup.html',function (req,res) {
//     res.sendFile(__dirname + '/players/views/register.html');
// });

//CONNECTING TO MONGODB ON START


mongoose.connect('mongodb://localhost:27017/userdata', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
            console.log('MongoDB Listening at port 3000....');
    }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

console.log("Localhost running @ port 3000... ");