var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alistair:cokelife@ds121965.mlab.com:21965/fund');
var Fund = require('../models/fund');
/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('new', {});
});

router.get('/:id', function(req, res, next) {
  db.funds.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, fund){
    if(err){
      res.send(err);
    }
    res.render('fund', { title: fund.title, goal: fund.goal, raised: fund.raised });
  });
});

router.post('/new', function(req, res, next) {
	Fund.create(req.body).then(function(fund){
		res.send(fund);
	}).catch(next)
});


module.exports = router;
