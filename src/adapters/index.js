const baseURL = 'http://127.0.0.1:3000/api/v1';

const headers = () => ({
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: localStorage.getItem('token'),
});

export const auth = (username, password) => (
  fetch(`${baseURL}/auth`, {
    method: 'post',
    headers: headers(),
    body: JSON.stringify({ username, password }),
  }).then(response => response.json())

);

export const currentUser = () => (
  fetch(`${baseURL}/current_user`, {
    headers: headers(),
  }).then(response => response.json())
);

export const createUser = ({ username, password }) => (
  fetch(`${baseURL}/user`, {
    method: 'post',
    headers: headers(),
    body: JSON.stringify({ username, password }),
  }).then(response => response.json())
);
