import React from 'react'
import GalleryItem from './GalleryItem'

const GalleryList = (props) => {
    return (
        <div>
                {
                props.galleryList.map((galleryItem, index)=>
                    <GalleryItem
                        key={index}
                        item={galleryItem}
                        updateLikes={props.updateLikes}
                    />
                    // <img key={galleryItem.id} src={galleryItem.path} alt={galleryItem.description}
                    // height="100" weight="100" />
                )
                }
        </div>
    )
}

export default GalleryList
