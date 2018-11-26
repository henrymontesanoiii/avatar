import React from 'react';
import {Button} from 'react-bootstrap';
import {Card, CardBody, CardTitle, CardSubtitle,CardText, CardImg} from 'reactstrap';

class Canvas extends React.Component{
	render(){		
		return (
      <div>
      <Card width={"200px"} >
        <CardTitle className="text-center" ><h4>Your Avatar</h4></CardTitle>
        <CardImg top  src={this.props.url} className="canvas-img" width={"200px"} height = {"300px"}  />
        <CardBody>    
          <Button bsStyle="success" onClick = {this.saveToCanvas}  >Save Avatar</Button>
        </CardBody>
      </Card>
    </div>
		);
	}
}

export default Canvas;