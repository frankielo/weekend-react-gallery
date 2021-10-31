import React, {useEffect, useState} from 'react'
import Axios from 'axios'

const MyApp = () => {

      const [galleryArray, setGalleryArray] = useState([])

      useEffect(() => {
          getGallery()
      }, [])

    const getGallery = ()=>{

        Axios.get('http://localhost:5000/gallery').then(res=>setGalleryArray(res.data))

    }


    return (
        <div>
            {
                galleryArray.map((galleryItem, index)=>
                    <img key={galleryItem.id} src={galleryItem.path} alt={galleryItem.description}
                    height="100" weight="100" />
                )
                }
        </div>
    )
}

export default MyApp
