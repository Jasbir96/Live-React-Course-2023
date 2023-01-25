// react 
import React from 'react';
// react dom 
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
// putting that component inside a dom mode 
root.render(
    //1
    <App message ={"lecture 1"}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
