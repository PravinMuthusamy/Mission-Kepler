import React from "react";
import Default from "../../components/CoverPicture";

const Image = ({imgSrc , imgAlt , className}) =>{
    const handleOnError = (e) =>{
        e.target.src=Default;
    }
    return(
        <img src={imgSrc} alt={imgAlt} className={className} onError={handleOnError}></img>
    )
}

export default Image;