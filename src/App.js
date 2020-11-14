// import logo from "./logo.svg";
import "./App.css";
import "./counter.css"
import Tambahan from './Tambahan.js'
import React, {useState} from 'react';


function App() {
  const [hitung, setHitung] = useState(0);
  
  const berhenti =()=>{
    if(hitung>0){
      setHitung(hitung-1)
    }
  }

  return (
    <div className="App-header">
      <div className="box">
      <h1>Counter with Function</h1>
      <p>{hitung}</p>
      <button className="btn third" onClick={()=>setHitung(hitung + 1)}>
      <b>+</b>
      </button>
      <button className="btn third" onClick={berhenti}>
      <b>-</b>
      </button>
      <Tambahan />
      </div>
    </div>
  );
}

export default App;
