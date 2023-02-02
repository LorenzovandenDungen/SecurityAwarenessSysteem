import React, { useState } from "react";

const EmployeeLogin = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState

("");

const handleSubmit = async (e) => {
e.preventDefault();
try {
const result = await validateInviteCode(inviteCode);
if (!result) {
setMessage("Invalid Code");
return;
}
// activate invite code
setMessage("Code activated");
} catch (error) {
setMessage("Error activating code, please try again later");
}
};

return (
<form onSubmit={handleSubmit}>
<label htmlFor="invite-code">Enter Invite Code:</label>
<input
type="text"
id="invite-code"
value={inviteCode}
onChange={(e) => setInviteCode(e.target.value)}
/>
<button type="submit">Submit</button>
{message && <div>{message}</div>}
</form>
);
};

export default EmployeeLogin;