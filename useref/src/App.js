import React, { useState } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState('');
  const handleOnChange = (e) => setName(e.target.value);

  return (
    <div style={{margin: '2em'}}>
      <input type='text' value={name} onChange={handleOnChange} />
      <p>名前： {name}</p>
    </div>
  );
}

export default App;
