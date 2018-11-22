import { VoicePlayer, VoiceRecognition } from 'babel-loader!react-voice-components'
import React from 'react';
export default class Voice extends React.Component {

  
	localAddOutfits = (e) => {
		//e.preventDefault();
		console.log(e);
		this.props.funcoutfit(e);
		
	}
  

	render() {

	return(
    <VoicePlayer play text="React voice player demonstration" />
  );
	}
}