const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const db = require('../models');

// GET /api/users
function index(req, res) {
  // access database and pull out all users
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

//login function
exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({token: tokenForUser(req.user)})
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  // See if a user with the given email exists


  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'})
  }

  User.findOne({email: email}, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with a given email does exist, return an error

    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }

      res.json({token: tokenForUser(user)});
    });

  });


  // If a user with email does not exist, create and save a user record

  // Respond to request indicating that the user was created
}

