// import logo from "./logo.svg";
// import "./App.css";
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
    <div className="App">
      <p>{hitung}</p>
      <button onClick={()=>setHitung(hitung + 1)}>
        +
      </button>
      <button onClick={berhenti}>
        -
      </button>
      <Tambahan />
    </div>
  );
}

export default App;
