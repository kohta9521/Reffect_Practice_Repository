import React, { useRef } from 'react'

function File() {
    const inputEl = useRef(null);
    const selectedFile = (e) => {
        console.log(e.target.files);
    }

  return (
    <div style={{ margin: '2em' }}>
      {/* <input type="file" /> */}
      <div>
        <button onClick={() => inputEl.current.click()}>ファイル</button>
      </div>
      <input ref={inputEl} type="file" hidden onChange={selectedFile} />
    </div>
  )
}

export default File
