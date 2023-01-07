import React, { useState } from 'react';
import './Journal.css'
import Entry from './Entry';
import Done from './Done';

export default function Journal(){
    const [liked, setLiked] = useState('asdasd');
    const [disliked, setDisliked] = useState('asdasd');
    const onChangeLiked = (e1) => {
        setLiked(e1.target.value);
    }
    const onChangeDisliked = (e2) => {
        setDisliked(e2.target.value);
    }
    return(
        <div className='journal'>
            What is something you liked today?
            <Entry txt={liked} onChange={onChangeLiked}/>
            What is something you disliked today?
            <Entry txt={disliked} onChange={onChangeDisliked}/>
            <Done liked={liked} disliked={disliked}/>
        </div>
    )
}