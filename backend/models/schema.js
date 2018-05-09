var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
  FirstName: {type: String},
  LastName : {type: String}
});

module.exports = mongoose.model('schema', schema);