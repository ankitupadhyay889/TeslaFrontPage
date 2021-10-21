import React from 'react';
import "../App.css";

const Btn = ({text , imp}) => {
    return (
        <div className={`btn ${imp==='secondary' ? 'btn_white': ''}`}>
            <p> {text} </p>
        </div>
    );
};

export default Btn;