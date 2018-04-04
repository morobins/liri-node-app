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
    getTweets();
    break;
  case "spotify-this-song":
    getSong();
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

function getTweets() {
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


//need to get the right data
function getSong() {
  var song = process.argv.slice(3).join(' ');
  spotify.search({
    type: 'track',
    query: song,
    limit:3
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // console.log(JSON.stringify(data, null, 2));
    console.log(JSON.stringify(data.tracks[0], null, 2));
  });
}