import React from 'react';

const Load = (props) => {
    return(
        <p style={{display: props.isUploading ? 'block':'none'}}> Now Uploading...</p>
    );
}

export default Load;