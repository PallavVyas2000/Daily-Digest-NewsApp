import './App.css';

import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar
            height={3}
            color='#EEEEEE'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={21} country={"in"} category="general" />} />                                            {/*if you dont add the key element in every route then you would need to manually refresh the page to see new content every time you clink on the nav buttons */}
            <Route exact path="/categories/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={21} country={"in"} category="technology" />} />
            <Route exact path="/categories/business" element={<News setProgress={this.setProgress} key="business" pageSize={21} country={"in"} category="business" />} />
            <Route exact path="/categories/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={21} country={"in"} category="entertainment" />} />
            <Route exact path="/categories/health" element={<News setProgress={this.setProgress} key="health" pageSize={21} country={"in"} category="health" />} />
            <Route exact path="/categories/science" element={<News setProgress={this.setProgress} key="science" pageSize={21} country={"in"} category="science" />} />
            <Route exact path="/categories/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={21} country={"in"} category="sports" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
