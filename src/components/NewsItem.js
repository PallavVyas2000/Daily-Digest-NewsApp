import React from 'react'

const NewsItem = (props) => {
    return (
      <div>
        <div className="card" style={{ height: "30rem" }}>
          <div className="cardimg"><img src={props.imgUrl} className="card-img-top" alt='' />
          <div className="card-img-overlay" style={{ height: "15rem" }}>
            <span className="badge rounded-pill bg-light text-dark">{props.source}</span>
          </div></div>
          <div className="card-body ">
            <h5 className="card-title">{props.title} ...</h5>
            <p className="card-text">{props.description} ...</p>
            <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.publishedAt).toUTCString()}</small></p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More!</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem
