import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import general from './Data/general.json';
import health from './Data/health.json';
import business from './Data/business.json';
import science from './Data/science.json';
import entertainment from './Data/entertainment.json';
import sports from './Data/sports.json';
import technology from './Data/technology.json';

export default function News(props) {
  const categ = { general, health, business, science, entertainment, sports, technology };
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

  // const updateNews = () => {
  //   props.setprogress(15);
  //   // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${page+1}&pageSize=${props.pageSize}`;
  //   // let data = await fetch(url);
  //   setarticles(articles1)
  //   console.log(setarticles)
  //   props.setprogress(40);
  //   // let parsedData = await data.json();
  //   settotalResults(articles1)
  //   props.setprogress(100);

  // }

  // useEffect(() => {
  //     updateNews();
  //     // eslint-disable-next-line
  // }, [])

  // const fetchMoreData = () => {
  //   // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bbc3c429fa4477a22b5c4bf40b05d5&page=${page+1}&pageSize=${props.pageSize}`;
  //   setpage( page + 1 )
  //   setarticles(articles.concat(articles1))
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   settotalResults(articles1)
  // }
  return (
    <>
      <h1 className={`h1 text-center text-${props.mode === 'dark' ? 'white' : 'dark'} `} style={{ marginTop: "120px", marginBottom: "50px", fontFamily: "Geometr212 BkCn BT" }}><b>Daily Digest - Top Headlines {capitalizeFirstLetter(props.category)}</b></h1>
      <InfiniteScroll
        dataLength={categ[props.category].articles.length}
        // next={fetchMoreData}
        hasMore={categ[props.category].articles.length !== totalResults}
      // loader={<div className="d-flex justify-content-center my-auto"> <div className="spinner-border text-center" style={{ width: "3rem", height: "3rem" }} role="status">
      // </div></div>}
      >
        <div className="container">
          <div className="row">
            {categ[props.category].articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.title}>
                <NewsItem mode={props.mode} toggleMode={props.toggleMode} title={element.title ? element.title.slice(0, 70) : ""} source={element.source.name} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt} description={element.description ? element.description.slice(0, 100) : ""} newsUrl={element.url} imgUrl={element.urlToImage ? element.urlToImage : "https://exchange4media.gumlet.io/news-photo/1522981614_f9REAd_online_content.jpg?format=webp&w=750&dpr=1.0"} />
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
