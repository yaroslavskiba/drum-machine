import React, {useEffect} from 'react';
// import { useSelector } from 'react-redux'

const Button = (props) => {
  const id = props.id;
  const link = props.link;

  useEffect(() => {
    document.addEventListener("keydown", soundKeyClick);
    return;
  })

  function soundMouseClick(link) {
    const audio = new Audio();
    audio.src = link;
    audio.play();
  }

  function soundKeyClick(e) {
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