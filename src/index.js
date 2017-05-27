import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

const initialState = window.initialState

ReactDOM.render(
  <App initialState = {initialState}/>,
  document.getElementById('root')
)
