var User = require('../Models/Users')

module.exports = {
   create: function(req, res){
       //var newUser = new User(req.body);
       User.create(req.body, function(err, user){
           if(err){
               console.log(err)
               return res.status(500).json(err)
           } else {
               user.password = null;
               return res.json(user)
           }
       });
   },
   
   read: function(req, res){
       User.find({}, function(err, users) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.send(users);
       })
   },
   
   update: function(req, res, done){
       User.findByIdandUpdate(req.user._id, req.body, function(err, result){
           if(err){
               return res.status(500).json(err)
           } else {
               res.status(200).json(result);
           }
       });
   },
    
    remove: function(req, res) {
        var usersToRemove = req.body;
        var count = 0;
        usersToRemove.forEach(function(user) {
            User.findByIdAndRemove(user._id, function(err, data) {
                if (err) {
                    console.log(err)
                    res.status(500).send(err)
                } else {
                    count++
                }
                if (count == usersToRemove.length) {
                    res.send('removed successfully')
                }
            })
        })
  }
};
