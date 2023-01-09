import React from 'react';
import './Home.css';
import Header from './Header';
import List from './List';

export default function Home(){
    return(
        <div className='titlebox'>     
            <Header/>
            <List/>
        </div>
    )
}