import React from 'react';

const CoolHello = ( props ) => {
    return (
        <h1 
            className="text-center my-5"
            style={{backgroundColor: props.bgColor, color: props.txtColor }}
            >hello
        </h1>
    )
}

export default CoolHello;