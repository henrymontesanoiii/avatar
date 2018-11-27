import React, { Component } from 'react';
import API from '../../utils/API';
import "./Weather.css";


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
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 text-center weather-type">
            <h1 className="mb-5 pb-5">Weather:</h1>
            <h4 className="mt-5"> City: {this.state.city}</h4>
            <h4>Country: {this.state.country}</h4>
            <br></br>

            <div className="col-12 col-sm-6 text-center">
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
            <div className="col-12 col-sm-6 text-center">
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
            <button className="btn btn-primary ml-3" onClick={this.handleSearch}>Get weather</button>

          </div>
        
          <div className="col-12 col-sm-8 col-md-6 weather-type text-center">
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