import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static defaultProps = {
      pageSize : 21,
      country : "in",
      category : ""
  }

  static propTypes = {
      pageSize : PropTypes.number,
      country : PropTypes.string,
      category : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading : false})
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading : false})
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })

  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading : false})
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="heading text-center">Daily Digest - Top Headlines</h1>
          {this.state.loading && <div class="d-flex justify-content-center my-auto"> <div className="spinner-border text-center" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div></div>}
          <div className="row my-4 d-flex justify-content-center">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 70) : ""} source={element.source.name} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt} description={element.description ? element.description.slice(0, 100) : ""} newsUrl={element.url} imgUrl={element.urlToImage ? element.urlToImage : "https://exchange4media.gumlet.io/news-photo/1522981614_f9REAd_online_content.jpg?format=webp&w=750&dpr=1.0"} />
              </div>
            })
            }
          </div>
        </div>
        <div className="container d-flex justify-content-between mt-5 mb-5">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2 my-2" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark btn-circle btn-xl">{this.state.page}</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-2 my-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News