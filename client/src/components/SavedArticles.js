import React, { Component } from "react"
import API from "../utils/API"

class SavedArticles extends Component {
    state = {
        articles: []
    }

    componentDidMount = () => {
// VIK_DEBUG: Uncomment later on
        API.getSavedArticles()
            .then(data => {
                console.log("Saved articles:", data)
            })
    }

    render() {
        return (<div className="card">
            <h5 className="card-header">Saved Articles</h5>
            <div className="card-body">
            </div>
        </div>)
    }
}

export default SavedArticles