var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  image: { type: String },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true},
  price: { type: String, required: true }
});

module.exports = mongoose.model('Products', schema);
