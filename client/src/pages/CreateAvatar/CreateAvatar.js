import React, { Component } from "react";
import Libmoji from "libmoji";
import ImageCard from "../../components/ImageCard/ImageCard";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import AvatarCarousel from "../../components/AvatarCarousel/AvatarCarousel"

const styles = {
  jumbotron: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundBlendMode: "multiply",
    backgroundColor: "#9ebeaf",
    minHeight: "16vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}


class App extends Component {
  state = {
    imageURL: "",
    outfits: [],
    selectedoutfit: "",
    brands: []
  };

  componentDidMount() {
    //this.setState({imageURL:Libmoji.getOutfits(Libmoji.getBrands("male")[0])});
  }

  handleClick = () => {
    let gender = Libmoji.genders[Libmoji.randInt(2)];
    let style = Libmoji.styles[Libmoji.randInt(3)];
    let traits = Libmoji.randTraits(Libmoji.getTraits(gender[0], style[0]));
    let outfit = Libmoji.randOutfit(Libmoji.getOutfits(Libmoji.randBrand(Libmoji.getBrands(gender[0]))));
    console.log(style[1]);
    console.log(Libmoji.buildPreviewUrl("fashion", 3, gender[1], 2, 0, traits, outfit));
    console.log(Libmoji.getBrands("male"));
    this.setState({ imageURL: Libmoji.buildPreviewUrl("fashion", 3, 1, 1, 0, traits, outfit) });
  };

  handleClick1 = () => {
    console.log(Libmoji.getOutfits(Libmoji.getBrands("male")[0]));
    console.log(Libmoji.getBrands("male"));
    this.setState({ outfits: Libmoji.getOutfits(Libmoji.getBrands("female")[0]) });
  };

  handleClickoutfit = (id) => {
    this.setState({ selectedoutfit: id });
  };

  handleClickeyespacing = () => {
    console.log(Libmoji.getBrands("female"));
    this.setState({ brands: Libmoji.getBrands("male") });

  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center p-4" style={styles.jumbotron}>
          <h1 className="display-4 text-light">Create your own Avatar</h1>
        </div>   
        <button className="btn btn-outline-info" onClick={() => this.handleClick1()}>Select your outifit</button>
        <button className="btn btn-outline-info" onClick={() => this.handleClickeyespacing()}>Click to select your eye spacing</button>
        <img src={this.state.imageURL} alt=""></img>
        <div className="row">
          {this.state.outfits.map(outfit => (
            <ImageCard
              id={outfit.id}
              key={outfit.id}
              image={outfit.image}
              handleClick={this.handleClickoutfit}
            />
          ))}   </div>
        <div className="row">
          {this.state.brands.map(brand => (
            <ImageCard
              id={brand.id}
              key={brand.id}
              image={brand.header_background}
              handleClick={this.handleClickbrand}
            />
          ))}   </div>
      </div>
    );
  }
}

export default App;

