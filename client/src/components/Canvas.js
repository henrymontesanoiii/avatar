import React from 'react';
import {Button} from 'react-bootstrap';
import {Card, CardBody, CardTitle, CardSubtitle,CardText, CardImg} from 'reactstrap';

class Canvas extends React.Component{
	render(){		
		return (
      <div>
      <Card>
        <CardTitle className="text-center" ><h4>Your Avatar</h4></CardTitle>
        <CardImg top width="100%" src={this.props.url} alt="" />
        <CardBody>    
          <Button bsStyle="success" onClick = {this.saveToCanvas} bsSize="large" >Save Avatar</Button>
        </CardBody>
      </Card>
    </div>
		);
	}
}

export default Canvas;