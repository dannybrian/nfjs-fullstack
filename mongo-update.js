var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var async = require('async');

var updateUser = function (db, username, callback) {
    var users = db.collection('users');
    users.update({
            a: 2
        }, // match these docs
        {
            $set: {
                user: "Daniel"
            }
        }, // set this
        {
            upsert: true
        }, // insert if no matches
        function (err, result) {
            console.log("updated record for " + username);
            process.exit();
        }
    );
}

async.parallel({
        db: function (callback) {
            mongodb.connect('mongodb://localhost:27017/quiz', function (err, db) {
                assert.equal(null, err);
                console.log('Connected correctly to mongodb server');
                callback(null, db);
            });
        },
    },
    function (err, results) {
        console.log('connection');
        updateUser(results.db, 'danny');
    });