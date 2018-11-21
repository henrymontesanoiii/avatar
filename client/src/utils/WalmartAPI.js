import axios from "axios";

// const APIKEY = "r2qcxgswnxb39z6qg3nmkru5";
// const SearchURL = "https://api.walmartlabs.com/v1/search?apiKey=";
// const TrendingURL = "https://api.walmartlabs.com/v1/trends?apiKey=";
// http://api.walmartlabs.com/v1/trends?apiKey=r2qcxgswnxb39z6qg3nmkru5


// Export an object that has methods for API calls
export default {
  // searchWalmart: function(query) {
  //   return axios.get(`${SearchURL + APIKEY}&query=${query}`);
  // },

  trendingWalmart: function() {
    return axios.get("/api/shop")
  }
};
