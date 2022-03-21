import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })

  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Daily Digest - Top Headlines</h2>
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 100):""} newsUrl={element.url} imgUrl={element.urlToImage?element.urlToImage:"https://exchange4media.gumlet.io/news-photo/1522981614_f9REAd_online_content.jpg?format=webp&w=750&dpr=1.0"} />
              </div>
            })
            }
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2 my-2" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark mx-2 my-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News