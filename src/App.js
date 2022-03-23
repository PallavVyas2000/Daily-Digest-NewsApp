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

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/"element ={<News key="home" pageSize = {21} country = {"in"} category = "general"/>}/>                                            {/*if you dont add the key element in every route then you would need to manually refresh the page to see new content every time you clink on the nav buttons */}
          <Route exact path="/categories/technology"element ={<News key="technology" pageSize = {21} country = {"in"} category = "technology"/>}/>
          <Route exact path="/categories/business"element ={<News key="business" pageSize = {21} country = {"in"} category = "business"/>}/>
          <Route exact path="/categories/entertainment"element ={<News key="entertainment" pageSize = {21} country = {"in"} category = "entertainment"/>}/>
          <Route exact path="/categories/health"element ={<News key="health" pageSize = {21} country = {"in"} category = "health"/>}/>
          <Route exact path="/categories/science"element ={<News key="science" pageSize = {21} country = {"in"} category = "science"/>}/>
          <Route exact path="/categories/sports"element ={<News key="sports" pageSize = {21} country = {"in"} category = "sports"/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}
