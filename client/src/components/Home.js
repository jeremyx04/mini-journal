import React from 'react';
import './Home.css';
import Header from './Header';
import List from './List';
import AddButton from './AddButton';

export default function Home(props){
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
    return(
        <div className='background'>
            <div className='titlebox'>     
                <Header date={parse(date).month + " " + parse(date).day + " " + parse(date).year}/>
                <AddButton/>
                <List entrys={props.entrys}/>
            </div>
        </div>
    )
}