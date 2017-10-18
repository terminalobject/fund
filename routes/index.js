var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alistair:cokelife@ds121965.mlab.com:21965/fund')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.funds.find(function(err, funds){
    if(err){
      res.send(err);
    }
    res.json(funds);
  });
});





module.exports = router;
