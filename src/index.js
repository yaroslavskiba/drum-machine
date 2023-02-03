import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import Button from './components/button';
import Display from './components/display';
import ControlTools from './components/control-tools';
import { Provider, useDispatch, useSelector } from 'react-redux'

function App() {
  const soundKey = useSelector(state => state.sound)
  return (

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>);