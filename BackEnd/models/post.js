var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// post schema
var PostSchema = new Schema({
    title: String,
    detail: String,
    location: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    date:Date
});

// post model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
