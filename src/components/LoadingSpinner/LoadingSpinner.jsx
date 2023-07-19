import React from "react";
import { ColorRing } from "react-loader-spinner";

function LoadingSpinner() {
    return <ColorRing
        visible={true}
        height={350}
        width={350}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#29c5f6', '#3a9bdc', '#5579c6', '#1260cc', '#00ffff']}
    />
    
}

export default LoadingSpinner