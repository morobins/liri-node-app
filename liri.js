//Red and set environment variables
require('dotenv').config();
var Spotify = require('node-spotify-api');

//When pushed up, people will only see this and not the actual keys.
console.log(process.env.SPOTIFY_CLIENTID)
console.log(process.env.SPOTIFY_CLIENTSECRET)
console.log(process.env.TWITTERKEY)
console.log(process.env.TWITTERID)

var spotify = new Spotify ({
  id: process.enc.SPOTIFY_CLIENTID,
  secret: process.env.SPOTIFY_CLIENTSECRET
});
