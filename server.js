require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Twit = require("twit");
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

app.use(express());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tweets/:search", (req, res) => {
  T.get("search/tweets", { q: req.params.search, count: 5 }, function(
    err,
    data,
    response
  ) {
    res.json(data);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.
