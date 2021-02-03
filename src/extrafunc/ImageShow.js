import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const ImageShow = ({ image }) => {
    const [isopen, setisopen] = useState(false);
    return (<>
        <img className='hoverable' src={image.url} alt={image.alt} onClick={() => {
            setisopen(true)
        }} />
        {isopen ? <Lightbox
            mainSrc={image.url}
            onCloseRequest={() => setisopen(false)}
        /> : <></>}
    </>
    )
}

export default ImageShow