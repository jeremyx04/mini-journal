import React from 'react';
import './Header.css'
export default function Header(){
    const current = new Date();
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
            month: months[arr[1]],
            year: arr[2]
        };
    };
    return(
        <div className='title'>
            {parse(date).month + " " + parse(date).day + " " + parse(date).year}
        </div>
    )
}