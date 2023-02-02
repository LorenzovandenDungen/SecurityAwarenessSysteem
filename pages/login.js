import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../utils/api';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.status === 200) {
        router.push('/user');
      } else {
        setError('Invalid invite code');
      }
    } catch (error) {
      setError('Something went wrong, please try again');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
