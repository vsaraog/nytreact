import React, {Component} from "react"

class SearchArticles extends Component  {
    handleSubmit = event => {
        event.preventDefault()
        const topic = event.target.topic.value
        const beginDate = event.target.beginDate.value
        const endDate = event.target.endDate.value
        this.props.searchTerm({topic: topic, beginDate: beginDate, endDate: endDate})
    }

  render() {
      return ( <div className="card">
  <h5 className="card-header">Search Articles</h5>
  <div className="card-body">
  <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    {/* <label htmlFor="topic">Topic</label> */}
    <input type="text" className="form-control" id="topic" placeholder="Topic" />
  </div>
  <div className="form-group">
    {/* <label htmlFor="beginDate">Start Year</label> */}
  {/* VIK_TODO: Allow only year input */}
  <input type="text" className="form-control" id="beginDate" placeholder="Begin Date" />
  </div>
  <div className="form-group">
    {/* <label htmlFor="endDate">End Year</label> */}
  {/* VIK_TODO: Allow only year input */}
  <input type="text" className="form-control" id="endDate" placeholder="End Date" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
</div> )
  }
}

export default SearchArticles