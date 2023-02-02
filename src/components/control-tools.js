import React from 'react';

export default function ControlTools() {
  return (
    <div className='control-tools'>
      <div className='power-tools'>
        <input type="checkbox" className='power' id='power' name='active-drum-machine' defaultChecked />
        <label htmlFor='power'>- Power</label>
      </div>
      <div className='power-tools'>
        <input type="checkbox" className='power' id='power' name='active-drum-machine' defaultChecked />
        <label htmlFor='power'>- Bank</label>
      </div>
    </div>
  );
}
