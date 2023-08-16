import axios from 'axios';

const host = 'http://95.130.227.180';

export const API = {
  registerUser: (user) => axios.post(host + '/api/auth/register', user),
  loginUser: (user) => axios.post(host + '/api/auth/login', user),
  verifyContact: (obj) => axios.post(host + '/api/auth/register/verify', obj),
  sendContact: (phone) =>
    axios.post(
      host + `/api/auth/register/send-code?phone=${phone.replace('+', '%2B')}`
    ),
};
