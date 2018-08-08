import React from 'react';

import '../../css/result.css';

const Result = (props) => {
    return(
        <div className="result" style={{display: props.data.isComplete ? 'block':'none'}}>
            <p>You can share your file by following link ↓↓</p>
            <a href={'https://swarm-gateways.net/bzz-raw:/'+props.data.swarmHash} target='_blank'>https://swarm-gateways.net/bzz-raw:/{props.data.swarmHash}</a>
            <img
                src={'https://swarm-gateways.net/bzz-raw:/'+props.data.swarmHash}
                style={{visibility: props.data.isImg ? 'visible':'hidden'}} />
        </div>
    );
}

export default Result;