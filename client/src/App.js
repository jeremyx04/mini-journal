import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Journal from './components/Journal';

function App() {
  const [entrys, setEntrys] = useState([]);
  const [routes, setRoutes] = useState([]);
  const getEntrys = async () => {
    try{
        const res = await fetch('http://localhost:5000/entrys');
        const data = await res.json();
        setEntrys(data);
        let arr = [];
        for(let i = 0; i < entrys.length; i++){
          arr.push({"id":entrys[i].id,
                    "date":entrys[i].date});
        }
        setRoutes(arr);
    } catch(err) {
        console.log(err.message);
    }
}
  useEffect(() => {
    getEntrys();
  },[entrys])

  return (
    <Routes>
      <Route path = '/' element={<Home entrys={entrys}/>} />
      {routes.map((entry) => {
        return <Route path = {`/${entry.id}`} element={<Journal id={entry.id} date={entry.date}/>} />
      })}
    </Routes>
  );
}

export default App;
