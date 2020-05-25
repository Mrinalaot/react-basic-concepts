import React from 'react';

const Book = (props) => {
    return(
    <div>
        <h1> Name : {props.name} </h1>
        <h3> published Date : {props.date}</h3>
        <p> Auther : {props.auther} </p>
    </div>
    );
}

export default Book;