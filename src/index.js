import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import Button from './components/button';
import ControlTools from './components/control-tools';
import { Provider, useSelector } from 'react-redux'
import Volume from './components/volume'

function App() {
  const buttonsOne = useSelector((state) => state.bank1.sound)
  const buttonsTwo = useSelector((state) => state.bank2.sound)
  const tone = useSelector((state) => state.tone.tone)
  const display = useSelector((state) => state.current.current);

  return (
    <>
      <div className='display'>{display}</div>
      <div id="drum-machine">
        {tone === 'normal' ?
          (buttonsOne.map((item, index) => <Button key={index} id={item.id} link={item.link} name={item.name} display={item.display} />)) :
          (buttonsTwo.map((item, index) => <Button key={index} id={item.id} link={item.link} name={item.name} display={item.display} />))}
      </div>
      <Volume />
      <ControlTools />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>);