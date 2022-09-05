import React from 'react';
import './App.css';

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Lets begin!"
    };
  this.onClick = this.onClick.bind(this);
  this.updateDisplay = this.updateDisplay.bind(this);
  }
  onClick() {
    this.updateDisplay();
  }

  updateDisplay() {
    this.setState({
      display: "lol"
    })
  }

  render(){
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <Display message={this.state.display}/>
          <div id="drum-pad-container">
            {soundBank.map(item => 
              <Pads 
              url={item.url}
              className='drum-pad'
              id={item.id}
              keyTrigger={item.keyTrigger}
              keyCode={item.keyCode}
              updateDisplay={this.updateDisplay}
              onKeyDown={this.onKeyDown}/>)
            }
          </div>
        </div>      
      </div>
    )
  }
}

const Display = (props) => {
  return (
    <div id="display-wrapper">
      <div id="dsm">
        Das Sound Machine
      </div>
      <div id="display">
        <div id="panel">
          {props.message}
        </div>
      </div>
    </div>
  )
}

const Pads = (props) => {
 
    const playSound = () => {
    const soundClip = document.getElementById(props.keyTrigger)
    soundClip.currentTime = 0;
    soundClip.play();
    props.updateDisplay();
  }
  return (
    <div className={props.className}  id={props.id} onClick={playSound} onKeyDown={props.onKeyDown}>
      <audio className='clip' src={props.url} id={props.keyTrigger}></audio>
      {props.keyTrigger}
    </div>
  )
}



export default App;