import React, { useState, useRef } from 'react'

function Count() {
    const [ count, setCount ] = useState(0);
    const countRef = useRef(0);
    const handleOnClick = () => setCount(count + 1);
    const handleOnClick2 = () => countRef.current ++;

    console.log('際描画');
  return (
    <div style={{ margin: '2em'}}>
      <div>{count}</div>
      <button onClick={handleOnClick}>CountUp</button>
      <div>{countRef.current}</div>
      <button onClick={handleOnClick2}>Count2アップ</button>
    </div>
  )
}

export default Count
