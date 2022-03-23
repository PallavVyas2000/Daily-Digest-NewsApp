import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, source, author } = this.props;
    return (
      <div>
        <div className="card" style={{ height: "30rem" }}>
          <div className="cardimg"><img src={imgUrl} className="card-img-top" alt='' />
          <div className="card-img-overlay" style={{ height: "15rem" }}>
            <span className="badge rounded-pill bg-light text-dark">{source}</span>
          </div></div>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toUTCString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
