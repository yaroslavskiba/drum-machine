import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/button';
import { Provider, useDispatch, useSelector } from 'react-redux'

function App() {
  const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  return (
    <div className='drum-machine-contaier'>
      <div className='button-group'>
        {buttons.map(name => <Button buttonName={name} key={name} />)} 
      </div>
      <div className='control-tools'>
        <div className='power-tools'>
          <input type="checkbox" className='power' id='power' name='active-drum-machine' defaultChecked />
          <label htmlFor='power'>- Power</label>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);