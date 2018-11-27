import axios from "axios";

const JOKEURL = "https://icanhazdadjoke.com/";


// Export an object that generates random joke
export default {
  getJoke: function() {
    return axios.get(JOKEURL, { headers: { Accept: "application/json" } });
  }
};
