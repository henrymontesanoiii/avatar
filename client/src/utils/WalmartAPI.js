import axios from "axios";

const APIKEY = "r2qcxgswnxb39z6qg3nmkru5";
const SearchURL = "http://api.walmartlabs.com/v1/search?apiKey=";
const TrendingURL = "http://api.walmartlabs.com/v1/trends?apiKey=";



// Export an object that has methods for API calls
export default {
  searchWalmart: function(query) {
    return axios.get({
      url: `${SearchURL + APIKEY}&query=${query}`,  
      headers: { 
        'Access-Control-Allow-Origin': 'http://api.walmartlabs.com'
      } 
    });
  },

  trendingWalmart: function() {
    return axios.get(`${TrendingURL + APIKEY}` )
  }
};
