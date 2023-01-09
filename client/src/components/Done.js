import React from 'react';
import './Done.css';

export default function Done(props){
    const handleClick = async() =>{
        try{
            const response = await fetch('http://localhost:5000/entrys', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   liked: props.liked,
                   disliked: props.disliked, 
                   date: props.date
                })
            });
            console.log(response);
        } catch (err){
            console.log(err.message);
        }
    }

    return (
        <div>
           <a onClick={handleClick}> <span className='btn'>|DONE|</span> </a>
        </div>
    )
}