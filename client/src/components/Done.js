import React from 'react';
import './Done.css';

export default function Done(props){
    const getEntry = async (id) => {
        try{
            const res = await fetch('http://localhost:5000/entrys/' + id);
            return res.json();
        } catch(err) {
            console.log(err.message);
        }
    }
    const handleClick = async() =>{
        try{
            let res = await getEntry(props.id);
            //console.log(props.date);
            if(!res){
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
                //console.log(response);
            }
            else{
                const response = await fetch('http://localhost:5000/entrys/' + props.id,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        liked: props.liked,
                        disliked: props.disliked, 
                        date: props.date
                    })
                });
                console.log(response);
            }
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