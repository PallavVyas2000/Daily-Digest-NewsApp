import React from 'react'
import PropTypes from 'prop-types'


export default function NewsItem (props) {
    return (
      <div>
        <div className={`card border-${props.mode === 'dark'? 'light':'dark'} text-${props.mode === 'dark'? 'light':'dark'} bg-${props.mode === 'dark'? "secondary":'light'}`} style={{ height: "30rem"}}>
          <div className="cardimg"><img src={props.imgUrl} className="card-img-top" alt='' />
          <div className="card-img-overlay" style={{ height: "15rem" }}>
            <span className="badge rounded-pill bg-light text-dark">{props.source}</span>
          </div></div>
          <div className="card-body ">
            <h5 className="card-title">{props.title} ...</h5>
            <p className="card-text">{props.description} ...</p>
            <p className="card-text"><small className={`${props.mode === 'light'?"text-muted":'text-dark'}`}>By {props.author} on {new Date(props.publishedAt).toUTCString()}</small></p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${props.mode === 'dark'? 'light':'secondary'}`}>Read More!</a>
          </div>
        </div>
      </div>
    )
  }
  
