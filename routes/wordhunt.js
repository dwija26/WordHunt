/**
 * Created by Raj Chandra on 4/18/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/public/wordhunt.html'));
});

module.exports = router;