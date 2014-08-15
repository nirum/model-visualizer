/* express */
var express = require('express')
	, router = express.Router()
  , Expt = require('../database')
  , _ = require('underscore');

/*
 * Main routes
 */

// index / generic info / landing page
router.get('/', function(req, res) {
	// get list of expt names
	Expt.find({}, 'expt', function(err,data) {
		var exptIDs = _.uniq(_.map(data, function(item) { return item['expt']; }));
  	res.render('index', {'exptIDs': exptIDs});
	});
});

// experiment descriptions
router.get('/:id', function(req, res) {
  Expt.find({'expt': req.params.id}, 'desc timestamp cellidx modeltype', function(err,data) {
    var keyfun = function(item) { return item['cellidx']; };
		var cells = _.uniq(_.map(data, keyfun));
    var expts = _.sortBy(data, keyfun);
    res.render('expt', {'expts': expts, 'cells': cells, 'name': req.params.id});
  });
});

// cell results
router.get('/:id/:cellid', function(req, res) {
  Expt.find({'expt': req.params.id, 'cellidx': req.params.cellid}, function(err,data) {
    res.render('cell', {'data': data, 'name': req.params.id, 'cellid': req.params.cellid});
  });
});

module.exports = router;
