var db = require('../models');


//find, findByIdAndUpdate, findById, remove, create



// GET '/api/post/get/:postid'
function index(req, res) {
  db.Post.findById(req.params.postid, function(err, foundPost) {
    if(err){
      res.send(err)
    }else{
      if(foundPost){
        res.status(200).json(foundPost);
      }else{
        res.status(404).json(null);
      }
    }
  });
}

function getPosts(req, res) {
  db.Post.find((err, posts) => {
    if(err){
      res.send(err)
    }else{
      if(posts){
        res.status(200).json(posts);
      }else{
        res.status(404).json(null);
      }
    }
  })
}

// POST ''/api/post/post/:email'
function create(req, res) {
  var post = req.body;
  
  db.User.findOne({email: req.params.email}, function(err, foundUser) {
    if(err){
      res.send(err)
    }else{
      if(foundUser){
        post.user = foundUser._id;
        console.log('post',post);
        db.Post.create(post, (err, newPost) => {
          if(err){
            res.send(err);
          }else{
            if(newPost){
              res.status(200).json(newPost);
            }else{
              res.status(404).json(null);
            }
          }
        })
      }
    }
  });
}

// PUT '/api/users/:userId/posts/:postId'
function update(req, res) {
  db.Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, function(err, foundPost) {
    if(err){
      res.send(err)
    }else{
      if(foundPost){
        res.status(200).json(foundPost);
      }else{
        res.status(404).json(null);
      }
    }
  });
}

// DELETE '/api/users/:userId/posts/:postId'
function destroy(req, res) {
  db.Post.findByIdAndRemove(req.params.postId, function(err, foundPost) {
    if(err){
      res.send(err)
    }else{
      if(foundPost){
        res.status(200).json(foundPost);
      }else{
        res.status(404).send(null);
      }
    }
  });
}


module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy,
  getPosts: getPosts
};
