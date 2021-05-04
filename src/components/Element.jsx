import React from 'react';


export default function Element({concept, type, mount, date}){
    return(
        <div className="card-body">
    <h5 className="card-title">{concept}: ${mount}</h5>
    <p className="card-text">{type} Date: {date}</p>
    <a href="#" className="btn btn-primary">Upload</a>   
     <a href="#" className="btn btn-danger">Delete</a>

  </div>
      
    )
}