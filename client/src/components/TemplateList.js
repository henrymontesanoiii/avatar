import React from 'react';
import TemplateListItem from '../components/TemplateListItem';

export default class TemplateList extends React.Component {

	func = (id,url) => { 
  	this.props.funcmain(id,url);
  } 

	render() {

		const results = this.props.data;

		let templates = results.map(item =>

			<TemplateListItem
				url={item.url}
				property_type={this.props.property_type}
				value={item.id}
				key={item.id}
				func={this.func}

			/>

		);


		return (

			<div className="row">
				{templates}
			</div>

		);
	}
}