import React from 'react';
import './Entry.css';

export default function Entry(props){

    return(
        <div>
           <textarea placeholder='...'  value={props.txt} className='entry' onChange={props.onChange}/>
        </div>
    )
}