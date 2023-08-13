import axios from 'axios';

const host = 'http://95.130.227.180:5000';

export const API = {
  registerUser: (user) => axios.post(host + '/api/common/auth/register', user),
  verifyContact: (obj) =>
    axios.post(host + '/api/common/auth/register/verify', obj),
  sendContact: (phone) =>
    axios.post(
      host +
        `/api/common/auth/register/send-code?phone=${phone.replace('+', '%2B')}`
    ),
};
