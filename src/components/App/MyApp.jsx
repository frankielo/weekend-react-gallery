import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import GalleryList from './GalleryList'

const MyApp = () => {

      const [galleryArray, setGalleryArray] = useState([])
      

      useEffect(() => {
          getGallery()
      }, [])

      const updateLikes = (id)=>{
        Axios.put(`http://localhost:5000/gallery/like/${id}`).then(getGallery())
      }

    const getGallery = ()=>{

        Axios.get('http://localhost:5000/gallery').then(res=>setGalleryArray(res.data))

    }


    return (
        <div>
            <GalleryList galleryList = {galleryArray} updateLikes={updateLikes}/>
                {/* {
                galleryArray.map((galleryItem, index)=>
                    <img key={galleryItem.id} src={galleryItem.path} alt={galleryItem.description}
                    height="100" weight="100" />
                )
                } */}
        </div>
    )
}

export default MyApp
