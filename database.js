// Database
var mongoose = require('mongoose')
  , dbUrl = "mongodb://localhost/modelfitting";

mongoose.connect(dbUrl);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + dbUrl);
});

/* schema */
module.exports = mongoose.model('Expt', mongoose.Schema({
    fobj: [Number],
    neg_loglikelihood: [Number],
    loglikelihood_difference: [Number],
    corrcoef: [Number],
    timestamp: Date,
    cellidx: Number,
    expt: String,
    desc: String
  }),
  'expts'
);
