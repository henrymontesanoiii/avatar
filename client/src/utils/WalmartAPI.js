import axios from "axios";
const keys = require('../keys');
require('dotenv').config();

const APIKEY = "r2qcxgswnxb39z6qg3nmkru5";
const SearchURL = "https://api.walmartlabs.com/v1/search?apiKey=";
const TrendingURL = "https://api.walmartlabs.com/v1/trends?apiKey=";

// const ProxyURL = "https://cors-anywhere.herokuapp.com/";


// Export an object that has methods for API calls
export default {
  searchWalmart: function(query) {
    return axios.get(`${SearchURL + APIKEY}&query=${query}`);
  },

  trendingWalmart: function() {
    return axios.get(`${TrendingURL + APIKEY}`)
  }
};
