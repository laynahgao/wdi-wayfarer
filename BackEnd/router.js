const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
var controllers = require('./controllers');
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({message: 'S3CR3T M3SS4G3'});
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);

  app.post('/api/post/user', controllers.users.create);
  app.get('/api/get/user/:email', controllers.users.login);
  app.put('/api/put/user', controllers.users.update);

  app.post('/api/post/post/:email', controllers.usersPosts.create);
  app.get('/api/post/get/:postid', controllers.usersPosts.index);
  app.get('/api/posts/get', controllers.usersPosts.getPosts);
  app.put('/api/put/post/:postId', controllers.usersPosts.update);
  app.delete('/api/delete/post/:postId', controllers.usersPosts.destroy);

}