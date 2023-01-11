import { React } from 'react';
import './AddButton.css';

export default function AddButton(){
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
    const getEntry = async (id) => {
        try{
            const res = await fetch('http://localhost:5000/entrys/' + id);
            return res.json();
        } catch(err) {
            console.log(err.message);
        }
    }
    let s = date.split('/');
    let id=''+s[0]+s[1]+s[2];
    const handleClick = async () => {
        let res = await getEntry(id);
        if(!res){ 
            const response = await fetch('http://localhost:5000/entrys', 
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                        id: id,
                        liked: '',
                        disliked: '',
                        date: parse(date).month + " " + parse(date).day + " " + parse(date).year,
                        })
                });
        }
        else{
            
        }
    }
    return (
        <a className='aaa' onClick={handleClick}> <div className='btn'> add new entry </div> </a>
    )
}