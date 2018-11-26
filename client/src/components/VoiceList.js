import React from 'react';

export default class VoiceList extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      values: [
        { name: 'One', id: 1 },
        { name: 'Two', id: 2 },
        { name: 'Three', id: 3 },
        { name: 'four', id: 4 }
      ],
      voices:[]
    };
  }

  handleClick = () => {
   
    let voicesList = window.speechSynthesis.getVoices();
    console.log(voicesList); 
    voicesList.forEach(element => {
      this.state.voices.push({ name: element.name, id: element.voiceURI });
    });  
    this.forceUpdate();
  }
 
	render() {
   
    let optionTemplate = this.state.voices.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

		
		return (
      <div>
      <button onClick={this.handleClick}>Get Voices</button>
      <label>
      Pick your favorite Number:
      <select value={this.state.voices} onChange={this.handleClick}>
        {optionTemplate}
      </select>
    </label></div>

		);
	}
}