import React from 'react';
import Iframe from 'react-iframe'

function VideoFrame() {
    return(
        <div className ='videoframe'>
        <Iframe url="https://www.youtube.com/embed/-3O3TVzbEJ8"
        width="607px"
        height="342px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
    )
    
}

export default VideoFrame;