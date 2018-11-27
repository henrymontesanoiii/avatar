import React, { Component } from "react";
import WalmartAPI from "../../utils/WalmartAPI";

const styles = {
  header: {
    backgroundColor: "#ffffff"
  }
}


class Shopping extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.getTrending();
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  //get search results
  getSearchResults = (event) => {
    event.preventDefault();

    WalmartAPI.searchWalmart(this.state.search)
      .then(res => {
        console.log(res.data.items);
        this.setState({
          search: "",
          results: res.data.items
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  getTrending = () => {
    WalmartAPI.trendingWalmart()
      .then((res) => {
        console.log(res.data.items);
        this.setState({
          results: res.data.items
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="container-fluid" style={styles.header}>
      <div className="row">
        <div className="col-12 col-sm-4">
          <form className="form-inline my-3 p-0">
            <input 
              className="form-control" 
              type="search" 
              placeholder="Search for a product" 
              aria-label="Search" 
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              /> 
            <button className="btn btn-primary" type="submit" onClick={this.getSearchResults}>Search</button>
          </form>
        </div>
        <div className="col-12 col-sm-6 mb-3">
          <h1>Search Walmart Products</h1>
        </div> 
      </div>

      <div className="row">
          { 
            (this.state.results.length === 0)
            ?
            (<h3>No results</h3>)
            :
            (this.state.results.map((item) => {
              return (
                <div key={item.itemId} className="col-12 col-sm-4 col-md-3 text-center card">
                  <div className="card-body">
                  <h4 className="card-title">{item.name}</h4> <hr></hr>
                  
                    <img src={item.largeImage} alt={item.name} className="img-fluid"/>
                    <h5>${item.salePrice || item.msrp}</h5>
                    <a className="btn btn-outline-primary" href={item.productUrl} target="_blank">Visit Product Page</a>
                  </div>
                </div>
              )
            })
          )}
        
      </div>
    </div>
    );
  }
}

export default Shopping;
