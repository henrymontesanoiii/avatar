import React, { Component } from 'react'
import speech from 'react-speech-synthesis'


class Talk extends Component {
  
  componentDidUpdate = () => {
   
    let voices = window.speechSynthesis.getVoices();
    console.log(voices);
    let utterThis = new SpeechSynthesisUtterance(this.props.commandtoTalk);
    utterThis.pitch = 1;
    utterThis.rate = 1;
    console.log(window.speechSynthesis);
    window.speechSynthesis.speak(utterThis);
  }

  
  render () {
    return (
      <div>
         
        {/* <label>
          Name:
          <input type="text"   />
        </label>
        
        <button onClick={this.handleSubmit}>Submit</button> */}
   
      </div>
      
    )
  }
}

export default Talk


    
    
    
