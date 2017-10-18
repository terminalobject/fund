var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://alistair:cokelife@ds121965.mlab.com:21965/fund')

/* GET home page. */

router.get('/:id', function(req, res, next) {
  db.funds.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, fund){
    if(err){
      res.send(err);
    }
    res.render('fund', { title: fund.title });
  });
});


//router.post('/fund', function(req, res, next){
//  var fund = req.body;
//  if(!fund.title){
//    res.status(400);
//    res.json({
//      "error": "bad data"
//    });
//   } else {
//     db.funds.save(fund, function(err, task){
//       if(err){
//         res.send(err);
//       }
//       res.json(fund);
//     });
//   }
// });



module.exports = router;
