import axios from "axios";

const BASEURL = "http://api.walmartlabs.com/v1/search?apiKey=";
const APIKEY = "r2qcxgswnxb39z6qg3nmkru5";


// Export an object that has methods for API calls
export default {
  searchWalmart: function(query) {
    return axios.get(`${BASEURL + APIKEY}&query=${query}`, { headers: { 'Access-Control-Allow-Origin': `${BASEURL + APIKEY}&query=${query}` } });
  }
};
