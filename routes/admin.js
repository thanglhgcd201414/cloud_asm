var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Admin Page', name: "ATN SHOP" });
});

module.exports = router;
