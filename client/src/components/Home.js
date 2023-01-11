import React from 'react';
import './Home.css';
import Header from './Header';
import List from './List';
import AddButton from './AddButton';

export default function Home(props){
    return(
        <div className='background'>
            <div className='titlebox'>     
                <Header/>
                <AddButton/>
                <List entrys={props.entrys}/>
            </div>
        </div>
    )
}