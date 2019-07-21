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

// Search all tweets
app.get("/tweets/:search", (req, res) => {
  T.get("search/tweets", { q: req.params.search, count: 6 }, function(
    err,
    data,
    response
  ) {
    res.json(data);
  });
});

// Search all users
app.get("/users/:search", (req, res) => {
  T.get("users/search", { q: req.params.search, count: 18 }, function(
    err,
    data,
    response
  ) {
    res.json(data);
  });
});

// Get Single User
app.get("/user/:name", (req, res) => {
  T.get("users/lookup", { screen_name: req.params.name }, function(
    err,
    data,
    response
  ) {
    res.json(data);
  });
});

// Get single user tweets
app.get("/user-tweet/:id", (req, res) => {
  T.get("", { screen_name: req.params.id }, function(err, data, response) {
    res.json(data);
  });
});

//
// var params = { screen_name: "nodejs" };
// T.get("statuses/user_timeline", params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.
