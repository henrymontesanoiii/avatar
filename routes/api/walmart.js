const router = require("express").Router();
// import axios from "axios";

router
.route("/")
.get("https://api.walmartlabs.com/v1/trends?apiKey=r2qcxgswnxb39z6qg3nmkru5")

module.exports = router;