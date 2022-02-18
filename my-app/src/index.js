import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const elem1 = <h2>Hello World of Reacts</h2>;

const elem = React.createElement('h1', {className: 'hello'}, 'Hello World of Reacts');

const element = <div className="">
<h2>Hello World of Reacts</h2>
<input type="text" />
<button type='submit'>Click</button>

</div>
 
ReactDOM.render(
  element,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
