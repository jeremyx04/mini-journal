import React from 'react';
import './Journal.css';
import Header from './Header';
import JournalBox from './JournalBox';

export default function Journal(){
    return(
        <div className='titlebox'>     
            <Header/>
            <JournalBox/>
        </div>
    )
}