var db = require('../models');

// GET /api/users
function index(req, res) {
  // access database and pull out all users
  db.User.findOne({user_id}, function(err, allUsers) {
    res.json(allUsers);
  });
}
//login function
function login(req,res) {
  console.log(req.params)
  db.User.findOne({email: req.params.email}, function(err, foundUser){
    if (err) { console.log('error', err); }
    if (foundUser){
      // if (foundUser.password === req.body.password){
        res.json(foundUser);
      } else {res.status(400)}
    // }
  })
}

// POST /api/users
function create(req, res) {
  // create a user based on request body and send it back as JSON
  db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    res.json(user);
  });
}

// DELETE /api/users/:userId
function destroy(req, res) {
  // find one user by id, delete it, and send it back as JSON
  db.User.findByIdAndRemove(req.params.user_id, function(err, deletedUser) {
    if (err) { console.log('error', err); }
    res.send(200);
  });
}

// PUT or PATCH /api/user/:userId
function update(req, res) {
  db.User.findOneAndUpdate({email: req.body.email}, req.body, {new: true}, (err, updatedUser) => {
    if(err){
      res.send(err);
    }
    else{
      if(updatedUser){
        res.status(200).json(updatedUser)
      }else{
        res.status(404).json(null)
      }
      
    }
  })
}

module.exports = {
  index: index,
  login: login,
  create: create,
  destroy: destroy,
  update: update
};
