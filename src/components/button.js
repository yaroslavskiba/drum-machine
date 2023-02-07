import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Button = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const link = props.link;
  const currentState = props.display;
  const volumeState = useSelector((state) => state.volume.volume);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const key = e.keyCode;
      if (key === id) {
        dispatch({ type: 'CURRENT', payload: currentState });
        const audio = new Audio();
        audio.volume = volumeState / 100;
        audio.src = link;
        audio.play();
      }
    });
  }, []);

  return (
    <>
      <button className='drum-pad'>{props.name}</button>
    </>
  );
}

export default Button;