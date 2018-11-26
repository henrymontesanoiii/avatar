import React from 'react';
import {Button} from 'react-bootstrap';
export default class ButtonList extends React.Component {

  
	localAddOutfits = (e) => {
		//e.preventDefault();
		console.log(e);
		this.props.funcoutfit(e);
		
	}
  

	render() {

		const results = this.props.data;
  
		let templates = results.map(item =>
			<Button value={item.id}  onClick = {() => this.localAddOutfits(item.id)}>{item.name}</Button>
		);


		return (

			<div className="row">
				{templates}
			</div>

		);
	}
}