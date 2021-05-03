import React from 'react';


export default function Element({concept, type, mount, date}){
    return(
        <li>
            <hr/>
            <p>concept: {concept}</p>
            <p>Type: {type}</p>
            <p>Mount: ${mount}</p>
            <p>Date: {date}</p>
        </li>
       
    )
}