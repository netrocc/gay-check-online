var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GAY CHECK ONLINE',
    description: 'You want to know if you or one of your friends are gay? No problem, this webcam face check takes only 10 seconds.',
    keywords: 'gay, check, test, netro',
    ogimageurl: 'gay-check-online.jpg'
  });
});

module.exports = router;
