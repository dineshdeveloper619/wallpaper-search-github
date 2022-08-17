import React from "react";
import "./App.css"
const ImageList=(props)=>{

var images=props.images.map((image)=>{
    return <img id="images" key={image.id} src={image.webformatURL} page={image}alt="images"/>
})

return(
    <div className="contain">
        <div className="imagecontainer">
        {images}
        </div>
    </div>
)
}

export default ImageList;