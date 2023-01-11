import React, { useState, useEffect } from 'react';
import './JournalBox.css'
import Entry from './Entry';
import Done from './Done';

export default function JournalBox(props){
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
    const getEntry = async (id) => {
        try{
            const res = await fetch('http://localhost:5000/entrys/' + id);
            const data = await res.json();
            await setLiked(data[0].liked);
            await setDisliked(data[0].disliked);
        } catch(err) {
            console.log(err.message);
        }
    }
    const onChangeLiked = (e1) => {
        setLiked(e1.target.value);
    }
    const onChangeDisliked = (e2) => {
        setDisliked(e2.target.value);
    }

    useEffect(() => {
        getEntry(props.id);
    },[]);
    useEffect(() => {
        console.log(liked,disliked);
    },[liked,disliked]);
    return(
        <div className='journal'>
            What is something you liked today?
            <Entry txt={liked} onChange={onChangeLiked}/>
            What is something you disliked today?
            <Entry txt={disliked} onChange={onChangeDisliked}/>
            <Done liked={liked} disliked={disliked} id={props.id} date={parse(date).month + " " + parse(date).day + " " + parse(date).year}/>
        </div>
    )
}