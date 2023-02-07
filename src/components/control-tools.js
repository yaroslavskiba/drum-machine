import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ControlTools() {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.power.power);
  const tone = useSelector((state) => state.tone.tone);
  console.log(power)

  const onChangeTone = () => {
    tone === 'normal' ? dispatch({type: 'TONE', payload: 'alternative'}) : dispatch({type: 'TONE', payload: 'normal'})
  }

  const onChangePower = () => {
    power === 'enabled' ? dispatch({ type: 'POWER', payload: 'disabled' }) : dispatch({ type: 'POWER', payload: 'enabled' });
  }
  return (
    <div className='control-tools'>
      <div>
        <p className='text'>BANK</p>
        <input id="tone" type="checkbox" name="tone" onChange={onChangeTone} />
        <label htmlFor="tone"></label>
      </div>
      <div>
        <p className='text'>POWER OFF </p>
        <input id="power" type="checkbox" name="power" onChange={onChangePower} />
        <label htmlFor="power"></label>
      </div>
    </div>
  );
}

export default ControlTools;