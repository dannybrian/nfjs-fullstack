var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var async = require('async');
var io = require('socket.io')(3000);

var updateUser = function(db, user, callback) {
    var users = db.collection('users');
    users.update(
        { a : 2 },           // match these docs
        { $set: { b : 1 } }, // set this
        { upsert: true }     // insert if no matches
    );  
}

async.parallel({
    db: function(callback) {
        mongodb.connect('mongodb://localhost:27017/quiz', function(err, db) {
            assert.equal(null, err);
            console.log('Connected correctly to mongodb server');
            callback(null, db);
        });
    },
},
function (err, results) {
    var everyone = io.on('connection', function(socket) {
        console.log('connection');
    });
});

