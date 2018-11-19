import axios from "axios";

const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIENDPOINT = "&units=imperial&appid=";
const APIKEY = "342d2d7e5af08b2e8114b52d9ac29603";

const JeopardyBase = "https://opentdb.com/api.php?amount=1&category="; 
const jeopardyEndPoint = "&type=multiple";
// const APIKEY = "342d2d7e5af08b2e8114b52d9ac29603";
// https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple

export default {
  getWeather: function (city, country) {
    console.log(city, country)
    let place = city.trim();
    console.log(BASEURL + place + "," + country + APIENDPOINT + APIKEY)
    return axios.get(BASEURL + place + "," + country + APIENDPOINT + APIKEY)
  },

  getCategoryList: function() {
    return axios.get("https://opentdb.com/api_category.php");
  },

  getJeopardyQuestion: function(categoryId, difficulty) {
    console.log(categoryId, difficulty)
    // let place = city.trim();
    console.log(JeopardyBase + categoryId + "&&difficulty=" + difficulty + jeopardyEndPoint)
    return axios.get(JeopardyBase + categoryId + "&&difficulty=" + difficulty + jeopardyEndPoint)
  }
  }
