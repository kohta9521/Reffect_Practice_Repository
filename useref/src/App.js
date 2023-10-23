import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputEl = useRef(null);
  const [ name, setName ] = useState('');
  const handleOnChange = (e) => setName(e.target.value);
  const handleOnClick = () => {
    console.log(inputEl.current.getBoundingClientRect());
    inputEl.current.focus();
    inputEl.current.style.color = 'red';
  };

  return (
    <div style={{margin: '2em'}}>
      <input ref={inputEl} type='text' value={name} onChange={handleOnChange} />
      <p>名前： {name}</p>
      <button onClick={handleOnClick}>フォーカスを当てる</button>
    </div>
  );
}

export default App;
