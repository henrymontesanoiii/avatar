import React from 'react';
import {Button} from 'react-bootstrap';
import {Card, CardBody, CardTitle, CardSubtitle,CardText, CardImg} from 'reactstrap';
import API from "../utils/API";

class Canvas extends React.Component{

  saveToCanvas = (e) =>
  {
    let userid = "";
    API
    .loginCheck()
    .then(res => {
      console.log(res.data);
      userid = res.data.userid;
      console.log(this.props.url);
      console.log(userid);
      return API.createAvatar({url: this.props.url, userid: res.data.userid})
  
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      this.setState({ isLoggedIn: false })

    })

    e.preventDefault();
   

  }
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