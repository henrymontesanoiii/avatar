import React from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import {Card, CardBody, CardTitle, CardSubtitle,CardText, CardImg} from 'reactstrap';
import API from "../utils/API";
import VoiceList from '../components/VoiceList'

class Canvas extends React.Component{

  constructor(props) {
    super(props);
    this.state = {      
      selectedVoice : "",
      needsRedirect : false
    };
  }

  getVoice = (voice) => 
  {
    console.log(voice);
    this.setState({selectedVoice : voice});
  }

  saveToCanvas = (e) =>
  {
    this.setState({needsRedirect : true});
    e.preventDefault();
    let userid = "";
    API
    .loginCheck()
    .then(res => {
      console.log(res.data);
      userid = res.data.userid;
      console.log(this.props.url);
      console.log(userid);
      return API.createAvatar({url: this.props.url, userid: res.data.userid, voice: this.state.selectedVoice})
  
    })
    .then(res => {
      console.log(res.data);
 
    })
    .catch(err => {
      console.log(err);
      this.setState({ isLoggedIn: false })

    })    
 
   

  }
	render(){	
    if(this.state.needsRedirect)
    {
      return <Redirect to="/"/>
    }	
		return (
      <div>
      <Card width={"200px"} >
        <CardTitle className="text-center" ><h4>Your Avatar</h4></CardTitle>
        <CardImg top  src={this.props.url} className="canvas-img"   />
        <CardBody>    
          <Button bsStyle="success" onClick = {this.saveToCanvas}  >Save Avatar</Button>
        </CardBody>
      </Card>
      <VoiceList callBackFromParent = {this.getVoice}></VoiceList>
    </div>
		);
	}
}

export default Canvas;