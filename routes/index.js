'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'jcpst.com' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'jcpst.com' });
});

router.get('/music', function (req, res) {
    res.render('music', { title: 'jcpst.com' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'jcpst.com' });
});

module.exports = router;