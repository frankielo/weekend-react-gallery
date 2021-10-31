import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

      useEffect(() => {
          getGallery()
      }, [])

    const getGallery = ()=>{

        Axios.get('http://localhost:5000/gallery').then(res=>console.log(res.data))

    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
