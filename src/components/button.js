import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'

const Button = () => {
  const buttonsOne = useSelector((state) => state.bank1.sound)
  const buttonsTwo = useSelector((state) => state.bank2.sound)
  const tone = useSelector((state) => state.tone.tone)

  useEffect(() => {
    document.addEventListener("keydown", soundKeyClick);
    return;
  })

  function soundMouseClick(link) {
    const audio = new Audio();
    audio.src = link;
    audio.play();
  }

  function soundKeyClick(e, id, link) {
    const key = e.keyCode;
    if (key === id) {
      soundMouseClick(link)
    }
  }

  return (
    <>
      {tone === 'normal' ? buttonsOne.map((item, index) => <button key={index}>{item.id}</button>)
        : buttonsTwo.map((item, index) => <button key={index}>{item.name}</button>)}
    </>
  );
}

export default Button;