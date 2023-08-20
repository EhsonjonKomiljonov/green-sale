import axios from 'axios';

const host = 'http://95.130.227.180';

export const API = {
  registerUser: (user) => axios.post(host + '/api/auth/register', user),
  verifyContact: (obj) => axios.post(host + '/api/auth/register/verify', obj),
  sendContact: (phone) =>
    axios.post(
      host + `/api/auth/register/send-code?phone=${phone.replace('+', '%2B')}`
    ),
  createSeller: (formData) =>
    axios.post(host + '/api/client/seller/post', {
      headers: {
        Bearer: 'Bearer' + ' ' + localStorage.getItem('token'),
      },
      formData,
    }),
};

console.log('Bearer' + ' ' + localStorage.getItem('token'));
