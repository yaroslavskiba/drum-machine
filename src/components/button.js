import React from 'react';


export default function GamepadButton(props) {
  return (
    <button className='drum-button'>
      <span>
        {props.buttonName}
      </span>
    </button>
  );
}