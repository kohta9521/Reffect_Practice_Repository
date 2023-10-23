import React, { useState, useRef } from 'react';
import './App.css';
import File  from './components/File';
import Count from './components/Count';
import StateForm from './components/StateForm';
import RefForm from './components/RefForm';

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
      <div>
        <File />
      </div>
      <div>
        <Count />
      </div>
      <div>
        <StateForm />
      </div>
      <div>
        <RefForm />
      </div>
    </div>
  );
}

export default App;
