import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Button = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const link = props.link;
  const currentState = props.display;
  const volumeState = useSelector((state) => state.volume.volume);
  const audioRef = useRef(null);
  
  useEffect(() => {
    audioRef.current = new Audio();
    
    const handler = (e) => {
      const key = e.keyCode;
      if (key === id) {
        dispatch({ type: 'CURRENT', payload: currentState });
        audioRef.current.volume = volumeState / 100;
        audioRef.current.src = link;
        audioRef.current.play();
      }
    };
 window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [volumeState]);

  return (
    <>
      <button className='drum-pad'>{props.name}</button>
    </>
  );
}

export default Button;