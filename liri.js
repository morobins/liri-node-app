//Red and set environment variables
require('dotenv').config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js')
// console.log(keys);

var spotify = new Spotify(keys.spotify);
// console.log(keys.spotify);
var client = new Twitter(keys.twitter);
// console.log(keys.twitter);

var command = process.argv[2];

switch (command) {
  case "my-tweets":
    tweet();
    break;
  case "spotify-this-song":
    spotify();
    break;
  case "movie-this":
    movies();
    break;
  case "do-what-it-says":
    random();
    break;
  default:
    console.log("You didn't put in a proper search term. PLease use 'my-tweets', 'spotify-this-song', 'movie-this', or 'do-what-it-says'.")
}

function tweet() {
  var params = {
    screen_name: 'moMoneyMoRamen',
    count: 20
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (error) {
      return console.log(error);
    }
    // console.log(tweets);
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].created_at);
      console.log(tweets[i].text);
    }
  });
};
// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }