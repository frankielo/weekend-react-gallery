import React, {useEffect, useState} from 'react';
import './App.css';
import MyApp from './MyApp';
// import Axios from 'axios';

function App() {

    //   const [galleryArray, setGalleryArray] = useState([])

    //   useEffect(() => {
    //       getGallery()
    //   }, [])

    // const getGallery = ()=>{

    //     Axios.get('http://localhost:5000/gallery').then(res=>setGalleryArray(res.data))

    // }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <MyApp />
      </div>
    );
}

export default App;
