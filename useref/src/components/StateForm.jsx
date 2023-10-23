import React, { useState } from 'react'

function StateForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`emai:${email}, password:${password}`);
    };
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
      console.log('文字が追加')
    };
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
      console.log('文字が追加')
    };
    return (
      <div className="App">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={handleChangeEmail} />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              value={password}
              onChange={handleChangePassword}
              type="password"
            />
          </div>
          <div>
            <button>ログイン</button>
          </div>
        </form>
      </div>
    );
}

export default StateForm
