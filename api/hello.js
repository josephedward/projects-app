import axios from "axios";

export default {
  // Gets all repos
  getrepos: function () {
    //separate server just for github api 
    //"https://github-repos-service.onrender.com/api/repos"
    return axios({
      method: "get",
      url:
        "https://corsproxy.io/?" +
        encodeURIComponent(
          "https://github-repos-service.onrender.com/api/repos"
        ),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
  },
};
