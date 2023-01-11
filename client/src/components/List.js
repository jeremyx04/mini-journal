import React, { useState, useEffect } from 'react';
import './List.css';

export default function List(){
    const [entrys, setEntrys] = useState([]);
    const getEntrys = async () => {
        try{
            const res = await fetch('http://localhost:5000/entrys');
            const data = await res.json();
            setEntrys(data);
        } catch(err) {
            console.log(err.message);
        }
    }
    const handleClick = async () => {

    }
    useEffect(() => {
        getEntrys();
    },[]);

    return(
        <div>
            {entrys.map(entry => (
                <a href={"http://localhost:3000/"+entry.id} className='listbox'> {entry.date} </a>
            ))}
        </div>
    )
}