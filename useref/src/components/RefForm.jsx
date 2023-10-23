import React, { useRef } from 'react'

function RefForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            `email:${emailRef.current.value}, password:${passwordRef.current.value}`
        );
    }

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input id='email' ref={emailRef} type='email' />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id='password' ref={passwordRef} type='password' />
        </div>
        <div>
            <button>ログイン</button>
        </div>
      </form>
    </div>
  )
}

export default RefForm
