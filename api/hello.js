// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const ghapi=require("./GHAPI")

// export default function handler(req, res) {
//   // res.status(200).json({ name: 'John Doe' })
//   ghapi.callGHAPI().then(repoData => res.json(repoData));
// }
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
