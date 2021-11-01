import React, {useState} from 'react'
import  "./GalleryItem.css";



const GalleryItem = (props) => {

    const [showImage, setShowImage] = useState(true)

    const display = showImage ?
    <img key={props.item.id} src={props.item.path} alt={props.item.description} height="100" weight="100" /> :
          <div>
              <p>{props.item.description}</p>
          </div>  
    // const clickHandler=(id)=>{

    //     Axios.put(`http://localhost:5000/gallery/like/${id}`)
    //     // setLikes(prevValue=>prevValue++)

    // }


    return (
        <div className="container">
            <div onClick={()=>setShowImage(prevState=>!prevState)}>
                {display}
            </div>
            <br/>
            <button onClick={()=>props.updateLikes(props.item.id)}>Love it!</button>
            <p>{`${props.item.likes} People like it`}</p>
        </div>
    )
}

export default GalleryItem
