import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Journal from './components/Journal';

function App() {
  const [entrys, setEntrys] = useState([]);
  const [routes, setRoutes] = useState([1,2,3]);
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
  })
  return (
    <Routes>
      <Route path = '/' element={<Home />} />
      {routes.map((id) => {
        return <Route path = {`/${id}`} element={<h1> hello {id} </h1>} />
      })}
    </Routes>
  );
}

export default App;
