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
  }
 onClick() {
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
              className='drum-pad'
              id={item.id}
              keyTrigger={item.keyTrigger}
              keyCode={item.keyCode}
              onClick={this.onClick}
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
          {props.display}
        </div>
      </div>
    </div>
  )
}

const Pads = (props) => {
  return (
    <div className={props.className} onClick={props.onClick} onKeyDown={props.onKeyDown}>
      <p>{props.keyTrigger}</p>
      <audio className='clip' src={props.url} id={props.keyTrigger}></audio>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Lets begin!"
    };
  this.onClick = this.onClick.bind(this);
  }
 onClick() {
  this.setState({
    display: "lol"
  })
 }

  render(){
    const renderPads = soundBank
      .map(item => 
      <div 
        className='drum-pad'
        id={item.id}
        keyCode={item.keyCode}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
      >
        <p>{item.keyTrigger}</p>
        <audio className='clip' src={item.url} id={item.keyTrigger}></audio>
      </div>
      )
      
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <div id="display-wrapper">
            <div id="dsm">
            Das Sound Machine
            </div>
            <div id="display">
              <div id="panel">
                {this.state.display}
              </div>
            </div>
          </div>
          <div id="drum-pad-container">
           {renderPads}
          </div>
        </div>
      </div>
    );
  }
}