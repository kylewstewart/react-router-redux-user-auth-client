const baseURL = 'http://localhost:3000/api/v1';

export const auth = (username, password) => (
  fetch(`${baseURL}/auth`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(response => response.json())
);

export const currentUser = token => (
  fetch(`${baseURL}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${token}`,
    },
  }).then(response => response.json())
);
