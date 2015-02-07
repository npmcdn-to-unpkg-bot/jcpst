'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'jcpst.com' });
});

router.get('/credits', function (req, res) {
    res.render('credits', {});
});

router.get('/software', function (req, res) {
    res.render('software', {});
});

module.exports = router;
