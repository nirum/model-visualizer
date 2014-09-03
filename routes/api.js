/* express */
var express = require('express')
	, router = express.Router()
  , Expt = require('../database')
  , _ = require('underscore');

/*
 * API
 */

// index / generic info / landing page
router.get('/expts', function(req, res) {
	// get list of expt names
	Expt.find({}, 'expt', function(err,data) {
		var exptIDs = _.uniq(_.map(data, function(item) { return item['expt']; }));
  	res.json(exptIDs);
	});
});

// experiment descriptions
router.get('/expts/:id', function(req, res) {
  Expt.find({'expt': req.params.id}, 'desc timestamp cellidx modeltype', function(err,data) {
    var keyfun = function(item) { return item['cellidx']; };
    var cells = _.uniq(_.map(data, keyfun));
    var expts = _.sortBy(data, keyfun);
    res.json({'expts': expts, 'cells': cells, 'name': req.params.id});
  });
});

// cell results
router.get('/expts/:id/:cellid', function(req, res) {
  Expt.find({'expt': req.params.id, 'cellidx': req.params.cellid}, function(err,data) {
    res.json(data);
  });
});

module.exports = router;
