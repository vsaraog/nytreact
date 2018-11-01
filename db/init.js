const mongoose = require("mongoose");

var db = require("../models/Article.js");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytArticlesDb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

export default {
    getArticles: () => {
        // VIK_QUESTION: Where does it use the mongoose object we set above?
        return db.Article.find({})
    },

    saveArticle: article => {
        return db.Article.create(article)
    }
}