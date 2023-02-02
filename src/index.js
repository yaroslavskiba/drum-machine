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
        {/* {buttons.map(name => <Button buttonName={name} key={name} />)}  */}
      </div>
      <div className='control-tools'>
        <form>
          <div className='power-tools'>
            <label htmlFor='power' className='title-tools'>power</label>
            <input type="checkbox" className='power' id='power' name='active-drum-machine' defaultChecked />
          </div>
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);