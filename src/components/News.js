import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (props.category === "general") {
    document.title = "Top Headlines - Daily Digest";
  }
  else {
    document.title = `${capitalizeFirstLetter(props.category)} News - Daily Digest`;
  }


  const updateNews = async () => {
    props.setprogress(15);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setprogress(40);
    let parsedData = await data.json();
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    props.setprogress(100);
  }

  useEffect(() => {
      updateNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${page+1}&pageSize=${props.pageSize}`;
    setpage( page + 1 )
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  }
  return (
    <>
      <h1 className="heading text-center" style={{marginTop: "120px"}}>Daily Digest - Top Headlines</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className="d-flex justify-content-center my-auto"> <div className="spinner-border text-center" style={{ width: "3rem", height: "3rem" }} role="status">
        </div></div>}>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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

News.defaultProps = {
  pageSize: 21,
  country: "in",
  category: ""
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News