import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform basic validation
    if (username.trim() !== '' && password.trim() !== '') {
      setIsValid(true);
      // Redirect to "/table" upon successful login
      history.push('/table');
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
