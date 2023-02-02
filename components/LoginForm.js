import React, { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, inviteCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Invite Code"
        value={inviteCode}
        onChange={(event) => setInviteCode(event.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
