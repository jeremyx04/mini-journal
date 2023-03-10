import React from 'react';
import './Journal.css';
import Header from './Header';
import JournalBox from './JournalBox';

export default function Journal(props){
    return(
        <div className='background'>
            <div className='titlebox'>     
                <Header date={props.date}/>
                <JournalBox id={props.id}/>
            </div>
        </div>
    )
}