import React, { useState }from 'react';
import './Journal.css'

export default function Journal(){
    const [text, setText] = useState('');
    return(
        <div className='journal'>
            What is something you liked today?
            <br/>
            <br/>
            What is something you disliked today?
        </div>
    )
}