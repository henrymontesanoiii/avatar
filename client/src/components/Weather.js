import React, { Component } from 'react';
import API from '../utils/API';


// on load, page will call openweather api for a NY, USA weather 

class Weather extends Component {

  state = {
    city: "New York",
    country: "USA",
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    description: "",
    icon: "",

    //  iconUrl: "http://openweathermap.org/img/w/" + this.state.icon + ".png"
  }

  // on load, call below method for default weather in NYC
  componentDidMount() {
    // call api
    this.getWeatherFunction();
    
  }

  // write method to hold onto API call for weather
  getWeatherFunction = () => {
    API
      .getWeather(this.state.city, this.state.country)
      .then((res) => {
        console.log(res.data);
        this.setState({ temp_min: res.data.main.temp_min, temp_max: res.data.main.temp_max, humidity: res.data.main.humidity, description: res.data.weather[0].description, icon: res.data.weather[0].icon})
        // console.log(this.state.icon)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();

    this.getWeatherFunction(this.state.city, this.state.country)

  }



  render() {
    return (
      <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 ml-auto">
          <h1>Weather:</h1><br></br>
          <h4> City: {this.state.city}</h4>
          <h4>Country: {this.state.country}</h4>
          <br></br>

          <div className="col-12 col-sm-6 col-md-4 text-center">
            <input
              className="form-control text-center"
              value={this.state.city}
              onChange={this.handleInputChange}
              name="city"
              placeholder="Search for city"
              type="text"

            />
            <br></br>

          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center">
            <input
              className="form-control text-center"
              value={this.state.country}
              onChange={this.handleInputChange}
              name="country"
              placeholder="Search for country"
              type="text"

            />
            <br></br>

          </div>
          <button className="btn  ml-3 btn-outline-primary" onClick={this.handleSearch}>Get weather</button>

        </div>
       
        <div className="col-12 col-sm-8 col-md-6 ml-auto">
          <img className="img-fluid" src={"http://openweathermap.org/img/w/" + (this.state.icon) + ".png"} alt="icon" />
          {/* <h3>Icon: {this.state.icon}</h3> */}
          <h4>temp min: {this.state.temp_min} </h4>
          <h4>temp max: {this.state.temp_max}</h4>
          <h4>humidity: {this.state.humidity}</h4>
          <h4>description: {this.state.description}</h4>

        </div>



      </div>
      </div>

    )
  }
}

export default Weather;