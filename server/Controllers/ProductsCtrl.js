var Products = require('../Models/Products');

module.exports = {

  create: function(req, res) {
    Products.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  read: function(req, res) {
    Products.find({}, function(err, data){
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        res.send(data)
    })
//        .sort('name')
//        .populate({
//            path: 'Products',
//            select: 'image name description price'
//        })
//        .select('pic name price')
//        .exec(function(err, result) {
//            if (err) return res.status(500).send(err);
//            res.json(result);
//        });
  },

  show: function(req, res) {
    Products.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  remove: function(req, res) {
      var productsToRemove = req.body;
      var count = 0;
      productsToRemove.forEach(function(product) {
        Products.findByIdAndRemove(product._id, function(err, data) {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                count++
            }
            if (count == productsToRemove.length) {
                res.send('removed successfully')
            }
        })
      })
  }

};
