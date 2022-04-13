import './App.css';

import { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App(){
  const [progress, setprogress] = useState(0)
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#394046';
      //showAlert("Dark Mode has been enabled.", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light Mode has been enabled.", "success");
    }
  }
  return (
    <Router>
      <div>
        <NavBar mode = {mode} toggleMode = {toggleMode} />
        <LoadingBar
          height={3}
          color='#EEEEEE'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="home" pageSize={100} country={"in"} category="general" />} />                                            {/*if you dont add the key element in every route then you would need to manually refresh the page to see new content every time you clink on the nav buttons */}
          <Route exact path="/categories/technology" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="technology" pageSize={100} country={"in"} category="technology" />} />
          <Route exact path="/categories/business" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="business" pageSize={100} country={"in"} category="business" />} />
          <Route exact path="/categories/entertainment" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="entertainment" pageSize={100} country={"in"} category="entertainment" />} />
          <Route exact path="/categories/health" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="health" pageSize={100} country={"in"} category="health" />} />
          <Route exact path="/categories/science" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="science" pageSize={100} country={"in"} category="science" />} />
          <Route exact path="/categories/sports" element={<News mode = {mode} toggleMode = {toggleMode} setprogress={setprogress} key="sports" pageSize={100} country={"in"} category="sports" />} />
        </Routes>
      </div>
    </Router>
  )
}
