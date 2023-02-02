import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [error, setError] = useState(null);

  const handleLogin = (inviteCode) => {
    // Validate invite code and log in the user
    if (!inviteCode) {
      setError('Please enter a valid invite code');
      return;
    }

    // Log in the user
    // ...

    setError(null);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
