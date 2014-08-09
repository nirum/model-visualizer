/* express */
var express = require('express')
	, router = express.Router()
  , Expt = require('../database')
  , stoch = require('stochastic');

/* GET home page. */
exports.index = function(req, res) {
  res.render('index');
};

exports.example = function(req, res) {
  res.render('example');
}

/* Brownian motion */
exports.brownian = function(req, res) {

  // define parameters
  var mu = ('mu' in req.query) ? req.query['mu'] : 0
    , sigma = ('sigma' in req.query) ? req.query['sigma'] : 1
    , T = ('T' in req.query) ? req.query['T'] : 1
    , nsteps = ('nsteps' in req.query) ? req.query['nsteps'] : 100;

  var data = {};
  data.trace1 = stoch.brown(mu, sigma, T, nsteps);
  data.trace2 = stoch.brown(mu, sigma, T, nsteps);
  data.trace3 = stoch.brown(mu, sigma, T, nsteps);

  // send data
  res.json(data);

}

/* Model fitting results */
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
