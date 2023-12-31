import Home from "./Home";
import { useState } from 'react';
import './style.css'


function App() {
  const [data, setData] = useState('data')
  const [showHome, setShowHome] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {
        setShowHome(!showHome)
      }}>show / hide</button>
      {
        showHome ? <Home data={data} />: ''
      }



    </div>
  );
}

export default App;
