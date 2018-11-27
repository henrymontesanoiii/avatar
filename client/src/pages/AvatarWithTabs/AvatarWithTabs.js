// File Imports
import React, { Component } from 'react';
import TemplateList from '../../components/TemplateList';
import ButtonList from '../../components/ButtonList';
import { Tabs, Tab, Jumbotron, ButtonGroup, ButtonToolbar, Col } from 'react-bootstrap';
import '../../App.css';
import Libmoji from "libmoji";
import assets from '../../JSON/assets.json'
import Canvas from '../../components/Canvas'
import VoiceList from '../../components/VoiceList'
import API from "../../utils/API";
import {Redirect} from "react-router-dom";

class AvatarWithTabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    username: "",
      selectedGender: "male",
      selectedStyle: "bitstrips",
      selectedOutfit: "",
      selectedOutfitStyle: "",
      selectedHat: "",
      selectedHair: "",
      selectedSkinTone: "",
      selectedHairTone: "",
      selectedGlasses: "",
      selectedAvatar: "",
      activeProperty: null,
      outfits: [],
      hats: [],
      hair: [],
      skintone: [],
      outfitTypes: [],
      hairtone: [],
      glasses: [],
      gender: [{ url: "/images/male.png", id: "male" },
      { url: "/images/female.png", id: "female" }],
      style: [
        { url: "/images/stylebitstrips.png", id: "bitstrips" },
        { url: "/images/styleclassic.png", id: "bitmoji" },
        { url: "images/styledeluxe.png", id: "cm" }]
    };
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
  }

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  funcSetGender = (id) => {

    this.setState({ selectedGender: id }, () => console.log(this.state.selectedGender));
    this.setState({ outfits: [] });
    this.setState({ brands: [] });
    this.setState({ hair: [] });
  }
  funcSetStyle = (id, url) => {

    this.setState({ selectedStyle: id }, () => console.log(this.state.selectedStyle));
  }

  funcSetOutfit = (id, url) => {
    this.setState({ selectedOutfit: id }, () => console.log(this.state.selectedOutfit));
    this.setState({ selectedAvatar: url }, () => console.log(this.state.selectedAvatar));
  }

  funcSetHair = (id, url) => {
    this.setState({ selectedHair: id }, () => console.log(this.state.selectedHair));
    this.setState({ selectedAvatar: url }, () => console.log(this.state.selectedAvatar));
  }

  funcSetHairTone = (id, url) => {
    this.setState({ selectedHairTone: id }, () => console.log(this.state.selectedHairTone));
    this.setState({ selectedAvatar: url }, () => console.log(this.state.selectedAvatar));
  }

  funcSetGlasses = (id, url) => {
    this.setState({ selectedGlasses: id }, () => console.log(this.state.selectedGlasses));
    this.setState({ selectedAvatar: url }, () => console.log(this.state.selectedAvatar));
  }

  funcSetHats = (id, url) => {
    this.setState({ selectedHat: id }, () => console.log(this.state.selectedHat));
    this.setState({ selectedAvatar: url }, () => console.log(this.state.selectedAvatar));
  }

  funcSetOutfitStyle = (id) => {
    console.log(this);
    this.setState({ selectedOutfitStyle: id }, () => this.pullOutfits(this.state.selectedGender, this.state.selectedOutfitStyle));
  }

  pullbackGrounds(gender) {
    let arrbrands = Libmoji.getBrands(this.state.selectedGender);
    arrbrands.forEach(element => {
      this.state.brands.push({ url: element.header_background, id: element.id });
    });
  }

  getGender(gender) {
    let genderurl = "";
    if (gender === "male") { genderurl = "1" } else { genderurl = "2" }
    return genderurl;
  }

  getStyle(style) {
    let styleurl = "";
    switch (style) {
      case "bitstrips": styleurl = "1"; break;
      case "bitmoji": styleurl = "4"; break;
      case "cm": styleurl = "5"; break;
      default: styleurl = "1"; break;
    }
    return styleurl;
  }

  handleSelect = (key) => {
    let gender = this.state.selectedGender;
    let style = this.state.selectedStyle;
    let outfit = this.state.selectedOutfit;    
    let hair = this.state.selectedHair;
    let hairtone = this.state.selectedHairTone;
    let glasses = this.state.selectedGlasses;
    switch (key) {
      case 3:
        this.pulloutfitStyles(gender);
        break;
      case 4:
        this.pullOutHairStyles(this.getGender(gender), this.getStyle(style), outfit);
        break;
      case 5:
        this.pullOutHairTones(this.getGender(gender), this.getStyle(style), outfit, hair);
        break;
      case 6:
        this.pulloutGlasses(this.getGender(gender), this.getStyle(style), outfit, hair, hairtone);
        break;
      case 7:
        this.pulloutHats(this.getGender(gender), this.getStyle(style), outfit, hair, hairtone, glasses);
        break;

      default: break;
    }
  }

  pulloutfitStyles = (gender) => {
    let arrFit = [];
    let arroutfit = assets["outfits"][gender]["brands"];
    arroutfit.forEach(element => {
      arrFit.push({ id: element.id, name: element.name });
    });
    this.setState({ outfitTypes: Array.from(arrFit) });

  }

  pullOutfits = (gender, outfitstyle) => {
    let arrFit = [];
    let arroutfit = assets["outfits"][gender]["brands"].find(res => String(res.id) === String(outfitstyle))

    arroutfit.outfits.forEach(element => {
      arrFit.push({ url: element.image, id: element.id });
    })
    this.setState({ outfits: Array.from(arrFit) });
  }

  pullOutHairStyles = (gender, style, outfit) => {
    let arrFit = [];
    let array = assets["traits"][this.state.selectedGender][this.state.selectedStyle]["categories"].find(arrRet => arrRet.key === "hair");
    array.options.forEach(element => {
      let baseURL = `https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=1&gender=${gender}&style=${style}&rotation=0&outfit=${outfit}&hair=${element.value}`;
      arrFit.push({ url: baseURL, id: `${element.value}` });
    });
    this.setState({ hair: Array.from(arrFit) });
  }

  pullOutHairTones = (gender, style, outfit, hair) => {
    let arrFit = [];
    let array = assets["traits"][this.state.selectedGender][this.state.selectedStyle]["categories"].find(arrRet => arrRet.key === "hair_tone");
    array.options.forEach(element => {
      let baseURL = `https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=1&gender=${gender}&style=${style}&rotation=0&outfit=${outfit}&hair=${hair}&hair_tone=${element.value}`;
      arrFit.push({ url: baseURL, id: `${element.value}` });
    });
    this.setState({ hairtone: Array.from(arrFit) });
  }

  pulloutGlasses = (gender, style, outfit, hair, hairtone) => {
    let arrFit = [];
    let array = assets["traits"][this.state.selectedGender][this.state.selectedStyle]["categories"].find(arrRet => arrRet.key === "glasses");
    array.options.forEach(element => {
      let baseURL = `https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=1&gender=${gender}&style=${style}&rotation=0&outfit=${outfit}&hair=${hair}&hair_tone=${hairtone}&glasses=${element.value}`;
      arrFit.push({ url: baseURL, id: `${element.value}` });
    });
    this.setState({ glasses: Array.from(arrFit) });
  }

  pulloutHats = (gender, style, outfit, hair, hairtone, glasses) => {
    let arrFit = [];
    let array = assets["traits"][this.state.selectedGender][this.state.selectedStyle]["categories"].find(arrRet => arrRet.key === "hat");
    array.options.forEach(element => {
      let baseURL = `https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=1&gender=${gender}&style=${style}&rotation=0&outfit=${outfit}&hair=${hair}&hair_tone=${hairtone}&glasses=${glasses}&hat=${element.value}`;
      arrFit.push({ url: baseURL, id: `${element.value}` });
    });
    this.setState({ hats: Array.from(arrFit) });
  }



  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }
    else {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Avatar Maker</h1>
        </Jumbotron>

        <div className="main">
          <Col md={9}>
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example" >
              <Tab eventKey={1} title="Gender" >
                <TemplateList
                  data={this.state.gender}
                  property_type="gender"
                  funcmain={this.funcSetGender}
                />
              </Tab>
              <Tab eventKey={2} title="Choose a Style"  >
                <TemplateList
                  data={this.state.style}
                  property_type="style"
                  funcmain={this.funcSetStyle}

                />
              </Tab>
              <Tab eventKey={3} title="Outfits">
                <ButtonToolbar>
                  <ButtonGroup bsSize="large">
                    <ButtonList
                      data={this.state.outfitTypes}
                      funcoutfit={this.funcSetOutfitStyle}
                    ></ButtonList>
                  </ButtonGroup>
                </ButtonToolbar>



                <TemplateList
                  data={this.state.outfits}
                  property_type="outfits"
                  funcmain={this.funcSetOutfit}
                />
              </Tab>

              <Tab eventKey={4} title="Hair">
                <TemplateList
                  data={this.state.hair}
                  property_type="hair"
                  funcmain={this.funcSetHair} />
              </Tab>
              <Tab eventKey={5} title="Hair-Tone">
                <TemplateList
                  data={this.state.hairtone}
                  property_type="hairtone"
                  funcmain={this.funcSetHairTone} />
              </Tab>
              <Tab eventKey={6} title="Glasses">
                <TemplateList
                  data={this.state.glasses}
                  property_type="glasses"
                  funcmain={this.funcSetGlasses} />
              </Tab>
              <Tab eventKey={7} title="Hats">
                <TemplateList
                  data={this.state.hats}
                  property_type="hats"
                  funcmain={this.funcSetHats} />
              </Tab>
            </Tabs>
          </Col>
          <Col md={3}>
            
            <Canvas
              url={this.state.selectedAvatar}
            />

          </Col>
        </div>
      </div>
    )};
  }
}

export default AvatarWithTabs;
