var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/example', function(req, res, next) {
  res.send('I am an example route');
  console.log("Example route was accessed");
});

module.exports = router;
