import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// let store = configureStore();
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  // console.log(store);
  // console.log(store.getState());
  ReactDOM.render(<h1>Todos App</h1>, root); // v1
  // ReactDOM.render(< />, root);
});
