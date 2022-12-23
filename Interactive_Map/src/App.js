import React, {useState} from 'react';
import './App.css';
import Map from './Map';
import ProgressBar from './ProgressBar';
import { readings } from './ProgressBar';
function App() {
  return (
    <div className="App"> 
         <Map/>
         <ProgressBar readings={readings}/> 
    </div>
    
  );
}

export default App;
