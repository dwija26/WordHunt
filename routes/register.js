/**
 * Created by Raj Chandra on 4/17/2017.
 */
var express = require('express');
var router = express.Router();

/* GET Sign up page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/public/register.html'));
});




module.exports = router;

