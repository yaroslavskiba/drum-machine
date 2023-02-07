import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Volume() {
  const dispatch = useDispatch();
  const volumeState = useSelector((state) => state.volume.volume);
  const power = useSelector((state) => state.power.power)


  function handleChange(e) {
    dispatch({type: 'VOLUME', payload: e.target.value})
  }
  return (
    <div className='display-volume'>
      <div className="volumeContainer">
        {power === 'enabled' ? <input className='volume' type="range" min='0' max='100' value={volumeState} onChange={handleChange} /> : 
          <input className='volume' type="range" min='0' max='100' value={volumeState} onChange={handleChange} disabled />}
      </div>
      <div>VOLUME: {volumeState}</div>
    </div>
  );
}

export default Volume;