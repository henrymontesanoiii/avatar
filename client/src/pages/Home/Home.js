// File Imports
import React, { Component } from 'react';
import { Tabs, Tab, Jumbotron, ButtonGroup, ButtonToolbar, Col } from 'react-bootstrap';
import '../../App.css';
import '../../components/Navbar/Navbar';
import Navbar from '../../components/Navbar/Navbar';
import ReactRadial from 'react-radial'
import PieMenu, { Slice } from 'react-pie-menu';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';
 
class Home extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <PieMenu 
    radius='250px' 
    centerRadius='50px'
    centerX={300}
    centerY={300}
  >
    {/* Contents */}
    {/* <Slice><FontAwesomeIcon icon="home" size="2x" /></Slice> */}
    <Slice onSelect={() => window.open('https://www.facebook.com', '_blank')}>
      {/* <FontAwesomeIcon icon="facebook-f" size="2x" /> */}
    </Slice>
    <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
      {/* <FontAwesomeIcon icon="twitter" size="2x" /> */}
    </Slice>
    <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
      {/* <FontAwesomeIcon icon="linkedin-in" size="2x" /> */}
    </Slice>
    <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
      {/* <FontAwesomeIcon icon="github" size="2x" /> */}
    </Slice>
    <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
      {/* <FontAwesomeIcon icon="rss" size="2x" /> */}
    </Slice>
    <Slice onSelect={() => window.open('https://www.pinterest.com/', '_blank')}>
      {/* <FontAwesomeIcon icon="pintrest" size="2x" /> */}
    </Slice>
    {/* <Slice><FontAwesomeIcon icon="asterisk" size="2x" /></Slice> */}
  </PieMenu>
     )
  }
}

export default Home;