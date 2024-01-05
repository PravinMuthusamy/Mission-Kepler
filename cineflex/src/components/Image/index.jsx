import React from "react";
import Default from "../../components/CoverPicture";

const Image = ({imgSrc , imgAlt , className, ...props}) =>{
    const handleOnError = (e) =>{
        e.target.src=Default;
    }
    return(
        <img src={imgSrc} alt={imgAlt} className={className} onError={handleOnError} {...props}></img>
    )
}

export default Image;