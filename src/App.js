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
      display: "Lets play!"
    };
  this.updateDisplay = this.updateDisplay.bind(this);
  }
  //displays the parameter. See playSound() in Pads Component
  updateDisplay(clipName) {
    this.setState({
      display: clipName
    })
  }
  render(){
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <Display message={this.state.display}/>
          {/*mapped soundBank into child component*/}
          <div id="drum-pad-container">
            {soundBank.map(item => 
              <Pads 
              url={item.url}
              className='drum-pad'
              id={item.id}
              keyTrigger={item.keyTrigger}
              keyCode={item.keyCode}
              updateDisplay={this.updateDisplay}/>)
            }
          </div>
        </div>      
      </div>
    )
  }
}

/*Pads needed to ba a class component in order to add event listeners without using
ref and some other thing I don't currently understand.*/
class Pads extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  //These lifecycle event were what allowed the keydown function to work.
  //Keydown uses keycodes (may differ by keyboard), whereas keypress uses the value on a given key.
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleClick() {
    this.playSound();
  } 
  handleKeyPress(e) {
    if(e.keyCode === this.props.keyCode) {
      this.playSound();
      }
    }
  playSound() {
    //accessing element by its mapped id.
    const soundClip = document.getElementById(this.props.keyTrigger)
    //currentTime = time point in soundclip (i.e. 0 = start).
    soundClip.currentTime = 0;
    //play() method triggers sound playback.
    soundClip.play();
    //taking the id value from the original/mapped array, and replacing hypehns with empty spaces.
    this.props.updateDisplay(this.props.id.replace(/-/g, ' '))
  }
  render() {
    return (
      <div className={this.props.className}  id={this.props.id} onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
        <audio className='clip' src={this.props.url} id={this.props.keyTrigger}></audio>
        {this.props.keyTrigger}
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

export default App;