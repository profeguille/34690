import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyAO3cry034wjHeW_uU1ynRCQsYgVkLB1-E',
  authDomain: 'project-9196546224327576121.firebaseapp.com',
  projectId: 'project-9196546224327576121',
  storageBucket: 'project-9196546224327576121.appspot.com',
  messagingSenderId: '158724237996',
  appId: '1:158724237996:web:61961de4de6c23343c8d09',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
