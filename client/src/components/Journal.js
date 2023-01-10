import React from 'react';
import './Journal.css';
import Header from './Header';
import JournalBox from './JournalBox';

export default function Journal(props){
    return(
        <div className='titlebox'>     
            <Header/>
            <JournalBox id={props.id}/>
        </div>
    )
}