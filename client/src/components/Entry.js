import React from 'react';
import './Entry.css';

export default function Entry(props){
    return(
        <div>
           <textarea placeholder='...'  className='entry' onChange={props.onChange}/>
        </div>
    )
}