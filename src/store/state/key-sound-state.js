const SOUND = 'SOUND';

const keySoundState = {
  type: SOUND,
  sound: [
    { id: 'Q', class: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', clip: 'Heater 1' },
    { id:'W', class: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', clip: 'Heater 2'},
    { id:'E', class: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', clip: 'Heater 3'},
    { id:'A', class: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3', clip: 'Heater 4'},
    { id:'S', class: 'https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3', clip: 'Clap'},
    { id:'D', class: 'https://s3.amazonaws.com/freecodecamp/drums/Open-HH.mp3', clip: 'Open-HH'},
    { id:'Z', class: "https://s3.amazonaws.com/freecodecamp/drums/Kick-n'-Hat.mp3", clip:"Kick-n'-Hat"},
    { id:'X', class: 'https://s3.amazonaws.com/freecodecamp/drums/Kick.mp3', clip:'Kick'},
    { id: 'C', class: 'https://s3.amazonaws.com/freecodecamp/drums/Closed-HH.mp3', clip: 'Closed-HH' }
  ]
};

export default keySoundState

