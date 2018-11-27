import React from 'react';

export default class VoiceList extends React.Component {

  gettingVoice = (voice) => {
    console.log(voice);
    this.props.callBackFromParent(voice);  
  }

   constructor(props) {
    super(props);
    this.state = {
      voices:[],
      selectedVoice : ""
    };
  }

  handleClick = () => {
   
    let voicesList = window.speechSynthesis.getVoices();
    console.log(voicesList);
    voicesList.forEach(element => {
      this.state.voices.push({ id: element.name, name: element.voiceURI });
    });  
    this.forceUpdate();
  }
 
  handleChange = (e) => {
    
    console.log(e.target.value);
    this.setState({selectedVoice : e.target.value},() => this.gettingVoice(this.state.selectedVoice));
    let utterThis = new SpeechSynthesisUtterance("This will be your voice");
    utterThis.pitch = 1;
    utterThis.rate = 1;
   // utterThis.voice = "Google Bahasa Indonesia";
   var voices = window.speechSynthesis.getVoices();
   for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === e.target.value) {
      utterThis.voice = voices[i];
    }
  }
    console.log(window.speechSynthesis);
    window.speechSynthesis.speak(utterThis);
 
  }
	render() {
   
    let optionTemplate = this.state.voices.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

		
		return (
      <div>
      <button onClick={this.handleClick}>Get Voices</button>
      <label>     
      <select value={this.state.voices} onChange={this.handleChange} >
        {optionTemplate}
      </select>
    </label></div>

		);
	}
}