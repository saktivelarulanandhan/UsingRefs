import React, { Component } from 'react';

const HOCReact = (props) => {
    return <div {...props}> {props.children} </div>;
}


export default HOCReact;