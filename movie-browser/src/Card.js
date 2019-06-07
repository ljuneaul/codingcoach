import React from 'react';
export default function Card(props) {
    return (
        <div className="card col-6">
        <img className="card-img-top" src="https://via.placeholder.com/200x100.png" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title"> { props.title } </h5>
            <p className="card-text"> { props.description } </p>
        </div>
        </div>
    )}
