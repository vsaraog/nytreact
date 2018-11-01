const mongoose = require("mongoose");

var db = require("../models");

// VIK_TODO: Change the database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articleScraperdb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

module.exports = app => {

    app.post('/save-article', (req, res) => {
        console.log('REQ BODY', req.body)
        db.Article.create(req.body)
        .then(dbArticle => {
            res.json(dbArticle)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.put('/delete-article', (req, res) => {
        console.log('REQ BODY', req.body)
        db.Article.deleteOne({_id: req.body.urlMd5})
        .then(dbArticle => {
            res.json(dbArticle)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.get('/saved-articles', (req, res) => {
        db.Article.find()
        .then(data => {
            console.log("Saved articles:", data)
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })
}