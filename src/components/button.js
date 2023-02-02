import React from 'react';

export default function GamepadButton(props) {
  return (
    <button className='drum-pad'>
      <span>
        {props.buttonName}
      </span>
    </button>
  );
}