import React, { useState } from 'react';
import './JournalBox.css'
import Entry from './Entry';
import Done from './Done';

export default function JournalBox(){
    let current = new Date();
    let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ];
    const parse = (date) => {
        let arr = date.split('/');
        return {    
            day: arr[0],
            month: months[arr[1]-1],
            year: arr[2]
        };
    };
    const [liked, setLiked] = useState('');
    const [disliked, setDisliked] = useState('');
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
            <Done liked={liked} disliked={disliked} date={parse(date).month + " " + parse(date).day + " " + parse(date).year}/>
        </div>
    )
}