import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

const Button = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const link = props.link;
  const currentState = props.display;

  useEffect(() => {
    window.addEventListener("keydown", soundKeyClick);
  }, []);

  function soundMouseClick(link) {
    dispatch({ type: 'CURRENT', payload: currentState });

    const audio = new Audio();
    audio.src = link;
    audio.play();
  }

  function soundKeyClick(e) {
    console.log(e)
    const key = e.keyCode;
    if (key === id) {
      soundMouseClick(link)
    }
  }

  return (
    <>
      <button className='drum-pad' onKeyDown={(e) => soundKeyClick(e)}>{props.name}</button>
    </>
  );
}

export default Button;