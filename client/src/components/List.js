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

    useEffect(() => {
        getEntrys();
    },[]);

    return(
        <div>
            {entrys.map(entry => (
                <button className='listbox'>{entry.date} </button>
            ))}
        </div>
    )
}