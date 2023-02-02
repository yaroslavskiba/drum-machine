import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/button';
import Display from './components/display';
import ControlTools from './components/control-tools';
import { Provider, useDispatch, useSelector } from 'react-redux'

function App() {
  const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  return (
    <div className='drum-machine-contaier' id="drum-machine">
      <Display />
      <div className='button-group'>
        {buttons.map(name => <Button buttonName={name} key={name} />)} 
      </div>
      <ControlTools />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);