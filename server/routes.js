/* express */
var express = require('express')
	, router = express.Router()
  , Expt = require('../database')
  , _ = require('underscore');

/* GET home page (main app). */
exports.index = function(req, res) {
	// get list of expt names
	Expt.find({}, 'expt', function(err,data) {
		var expts = _.map(data, function(item) { return item['expt']; });
  	res.render('index', {'expts': expts});
	});
};

/* API: Model fitting results */
exports.expt = function(req, res) {
  Expt.find({'expt': req.params.id}, function(err,data) {
    res.json(data);
  });
}

exports.cell = function(req, res) {
  Expt.findOne({'expt': req.params.id, 'cellidx': req.params.cellidx}, function(err,data) {
    res.json(data);
  });
}
