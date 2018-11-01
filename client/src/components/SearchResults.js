import React, { Component } from "react"
import API from "../utils/API"

class SearchResults extends Component {
    state = {
        results: [],
    }

    componentDidMount = () => {
        this.props.searchClicked(this.searchArticles)
    }

    saveArticle = article => {
        console.log("In saveArticle")
        console.log(article)
        // API.saveArticle(article)
        // .then(resp => {
        //     console.log("article saved")
        // })
        // .catch(resp => {

        // })
    }

    searchArticles = terms => {
        API.searchNYT(terms)
            .then(res => {
                let articles = []
                // console.log(res)
                for (let i = 0; i < 5; ++i) {
                    // console.log(res.data.response.docs[i].headline.main)
                    // console.log(res.data.response.docs[i].snippet)
                    // console.log(res.data.response.docs[i].pub_date)
                    // console.log(res.data.response.docs[i].web_url)

                    const displayObj =
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{res.data.response.docs[i].headline.main} <a onClick={this.saveArticle({topic:"Sending in test"})} className="card-link">Save</a></h5>
                                <p className="card-text">{res.data.response.docs[i].snippet}</p>
                            </div>
                        </div>

                    articles.push(displayObj)
                }
                this.setState({
                    results: articles
                })
            })
    }

    // getSearchArticles = () => {
    //     const displayObj = 
    //     <div className="card">
    //         <div className="card-body">
    //             <h5 className="card-title">Card title <a href="#" className="card-link">Save</a></h5>
    //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         </div>
    //     </div>

    //     let results = []
    //     for (let i = 0; i < 5; ++i) {
    //         results.push(displayObj)
    //     }
    //     return (
    //         results
    //     )
    // }

    render() {
        return (
            <div className="card">
                <h5 className="card-header">Search results</h5>
                {this.state.results}
            </div>
        )
    }
}

export default SearchResults