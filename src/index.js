import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import Button from './components/button';
import Display from './components/display';
import ControlTools from './components/control-tools';
import { Provider, useDispatch, useSelector } from 'react-redux'

function App() {

  useEffect(() => {
    document.addEventListener("keydown", soundKeyClick);
    return;
  })

  function soundMouseClick() {
    const audio = new Audio()
    audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    audio.play()
  }

  function soundKeyClick(e) {
    const key = e.keyCode;
    if (key === 81) {
      soundMouseClick()
    }
  }
  return (
    <>
      <button onClick={soundMouseClick} onKeyDown={(e) => soundKeyClick(e)}>click</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>);