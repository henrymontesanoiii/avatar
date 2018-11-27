import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from 'prop-types'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func
}

class Dictaphone extends Component {
  gettingTheCommand = (e) => {
    console.log(this.props.finalTranscript);
    this.props.callBackFromParent(this.props.finalTranscript);  
  }

  componentDidUpdate(prevProps,prevState)
  {
    //console.log(prevProps);
   if(prevProps.finalTranscript  !== this.props.finalTranscript)
    {
        console.log (this.props);
        this.props.callBackFromParent(this.props.finalTranscript);  
    }
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening,stopListening } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={startListening}>Start Listenting</button>
        <button onClick={stopListening}>Stop Listenting</button>
        <button onClick={resetTranscript}>Reset</button>   
        <button onClick={this.gettingTheCommand} value={transcript}>Click here </button>
             <span ><h1>{transcript}</h1></span>
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)