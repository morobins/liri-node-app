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
    getMovie();
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


//need to get the right data for album
function getSong() {
  var song = process.argv.slice(3).join(' ');
  spotify.search({
    type: 'track',
    query: song,
    limit:1
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // console.log(JSON.stringify(data, null, 2));
    console.log("Artist Name: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    console.log("Song Name: " + JSON.stringify(data.tracks.items[0].name, null, 2));
    console.log("Preview: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
  });
}

function getMovie() {
  var movieName = process.argv.slice(3).join(" ");
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function (err, response, data) {
  if (!err && response.statusCode === 200) {
    console.log(data);
    console.log("Movie Title: " + JSON.parse(data).Title);
    console.log("Released in: " + JSON.parse(data).Year);
    console.log("IMDB Rating: " + JSON.parse(data).imdbRating);
    console.log(JSON.parse(data).Ratings[1]);
    console.log("Produced in: " + JSON.parse(data).Country);
    console.log("Language: " + JSON.parse(data).Language);
    console.log("Plot: " + JSON.parse(data).Plot);
    console.log("Actors: " + JSON.parse(data).Actors);
  }
});
}