const db = require("./index")

const article = {
    title: "Test title", 
    link: "Test link",
    summary: 'Test summary'
}

db.saveArticle(article)