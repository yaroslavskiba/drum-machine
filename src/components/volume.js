import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Volume() {
  const dispatch = useDispatch();
  const volumeState = useSelector((state) => state.volume.volume);

  function handleChange(e) {
    dispatch({type: 'VOLUME', payload: e.target.value})
  }
  return (
    <>
      <input type="range" min='0' max='100' value={volumeState} onChange={handleChange} />
      <div>{volumeState}</div>
    </>
  );
}

export default Volume;