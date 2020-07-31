import React from 'react';


const ModalButton = props => (
    <button className="button" onClick={props.handleClick}>
        {props.children}
    </button>);

export default ModalButton;