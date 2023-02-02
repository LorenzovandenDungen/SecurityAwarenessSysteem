import React from 'react';
import { useSelector } from 'react-redux';
import UserPage from '../components/UserPage';

const User = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Page</h1>
      <UserPage user={user} />
    </div>
  );
};

export default User;
