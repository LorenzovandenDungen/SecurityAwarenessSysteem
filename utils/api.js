import axios from 'axios';

export const login = async data => {
const response = await axios.post('/api/login', data);
return response.data;
};

// utils/validation.js
export const validateLoginForm = data => {
const errors = {};

if (!data.username) {
errors.username = 'Username is required';
}

if (!data.password) {
errors.password = 'Password is required';
}

return {
isValid: Object.keys(errors).length === 0,
errors,
};
};