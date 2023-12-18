import React from "react";
import defaultImage from "../../Assets/defaultImage.jpeg";

const Image = ({imgSrc , imgAlt , className}) =>{
    const handleOnError = (e) => {
        e.target.src = defaultImage;
    }
    return(
        <img src={imgSrc} alt={imgAlt} className={className} onError={handleOnError}/>
    )
}

export default Image;