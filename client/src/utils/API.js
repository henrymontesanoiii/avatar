import axios from "axios";

export default {

  getAssets : function () {
    return axios.get("/api/asset");
  }
  
};
