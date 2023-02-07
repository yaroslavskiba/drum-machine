import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Button = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const link = props.link;
  const currentState = props.display;
  const volumeState = useSelector((state) => state.volume.volume);
  const power = useSelector((state) => state.power.power)
  const audioRef = useRef(null);
  const tone = useSelector((state) => state.tone.tone)

  useEffect(() => {
    if (power !== 'enabled') {
      return;
    }
    audioRef.current = new Audio();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [volumeState, tone, power]);

  function handler(e) {
    const key = e.keyCode;
    if (key === id) {
      soundPlay();
    }
  };

  function soundPlay() {
    dispatch({ type: 'CURRENT', payload: currentState });
    audioRef.current.volume = volumeState / 100;
    audioRef.current.src = link;
    audioRef.current.play();
  }

  return (
    <>
      {power === 'enabled' ? <button className='drum-pad' onClick={soundPlay}>{props.name}</button> :
      <button className='drum-pad' onClick={soundPlay} disabled>{props.name}</button>}
    </>
  );
}

export default Button;