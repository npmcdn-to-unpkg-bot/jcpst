var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
<<<<<<< HEAD
  res.render('index', { title: 'jcpst.com' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'jcpst.com' });
});

router.get('/music', function(req, res) {
  res.render('music', { title: 'jcpst.com' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'jcpst.com' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> c2c3846489e15ca5b13cd1b6497383c8635b1f77
});

module.exports = router;
