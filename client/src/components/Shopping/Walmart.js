import React, { Component } from "react";
import API from "../../utils/WalmartAPI";


class Shopping extends Component {
  state = {
    search: "",
    results: []
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  //get search results
  getSearchResults = (event) => {
    event.preventDefault();

    API.searchWalmart(this.state.search)
      .then(res => {
        console.log(res.items);
        this.setState({
          search: "",
          results: res.items
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Search for Products on Walmart</h1>
        </div>
        <div className="col-12 col-sm-6 col-md-4">

          <form className="form-inline">
            <input 
              className="form-control mr-sm-2" 
              type="search" 
              placeholder="Search for a product" 
              aria-label="Search" 
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              /> 
            <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={this.getSearchResults}>Search</button>
          </form>
          
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          <div className="row align-items-center">
            { 
              (this.state.results.length === 0)
              ?
              (<h3>No results</h3>)
              :
              (this.state.results.map((item) => {
                return (
                  <div key={item} className="col-12 col-md-4 text-center">
                    <h6>{item.name}</h6>
                    <img src={item.largeImage} alt={item.name} className="img-fluid"/>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Shopping;
