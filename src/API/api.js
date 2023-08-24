import axios from 'axios';

const host = 'http://95.130.227.180:5000';

export const API = {
  registerUser: (user) => axios.post(host + '/api/auth/register', user),
  loginUser: (user) => axios.post(host + '/api/auth/login', user),
  verifyContact: (obj) => axios.post(host + '/api/auth/register/verify', obj),
  sendContact: (phone) =>
    axios.post(
      host + `/api/auth/register/send-code?phone=${phone.replace('+', '%2B')}`
    ),
  createSeller: (formData) =>
    axios.post(host + '/api/client/seller/post', {
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('token'),
      },
      formData,
    }),
  updatePassword: (data) => axios.post(host + '/api/auth/password/reset', data),
  verifyNewPassword: (data) =>
    axios.post(host + '/api/auth/password/verify', data),
};

console.log('Bearer' + ' ' + localStorage.getItem('token'));
