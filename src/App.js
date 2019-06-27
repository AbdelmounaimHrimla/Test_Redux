import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import Blog from './containers/Blog/Blog';
import BlogAxios from './containers/BlogAxios/BlogAxios';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/*
            This Blog Without Axios
            <Blog />
          */}
          <BlogAxios />
        </BrowserRouter>
    </div>
  );
}

export default App;
