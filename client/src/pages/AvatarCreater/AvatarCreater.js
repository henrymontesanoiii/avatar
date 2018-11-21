import React, { Component } from "react";
import AvatarCarousel from "../../components/AvatarCarousel/AvatarCarousel"

class AvatarCreater extends Component {
  state = {
    imageURL: "",
    outfits: [],
    selectedoutfit: "",
    brands: []
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center p-4">
          <h1 className="display-4 text-light">Create your own Avatar</h1>
        </div>
        <AvatarCarousel></AvatarCarousel>
      </div>
    );
  }
}

export default AvatarCreater;