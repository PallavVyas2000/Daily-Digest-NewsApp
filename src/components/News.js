import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    pageSize: 21,
    country: "in",
    category: ""
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }
    if (this.props.category === "general") {
      document.title = "Top Headlines - Daily Digest";
    }
    else {
      document.title = `${this.capitalizeFirstLetter(this.props.category)} News - Daily Digest`;
    }
  }

  async componentDidMount() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
  }
  render() {
    return (
      <>
        <h1 className="heading text-center">Daily Digest - Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className="d-flex justify-content-center my-auto"> <div className="spinner-border text-center" style={{ width: "3rem", height: "3rem" }} role="status">
          </div></div>}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 70) : ""} source={element.source.name} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt} description={element.description ? element.description.slice(0, 100) : ""} newsUrl={element.url} imgUrl={element.urlToImage ? element.urlToImage : "https://exchange4media.gumlet.io/news-photo/1522981614_f9REAd_online_content.jpg?format=webp&w=750&dpr=1.0"} />
                </div>
              })
              }
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News