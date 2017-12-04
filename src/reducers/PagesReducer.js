const initialState = [
  { key: 1, name: 'home', path: '/' },
  { key: 2, name: 'about', path: '/about' },
  { key: 3, name: 'page one', path: '/pageone' },
  { key: 4, name: 'page two', path: '/pagetwo' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
