var express = require('express')
	, router = express.Router()
	, models = require('./models');

/* GET home page. */
exports.index = function(req, res) {
		res.render('index', { title: 'Express' });
};
