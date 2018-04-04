# liri-node-app

LIRI aka Language Interpretation and Recognition Interface is like iPhone's SIRI. Instead of Speech Interpretation and Recognition Interface, LIRI can take in a command and gives you back data.

For example - utilizing the spotify npm, you can put in "spotify-this-song" "{song of your choice}" and get back the:
  * Artist Name
  * Song
  * Preview Link
  * Album

Utilizing the OMDB - through the request npm, you can put "movie-this" "{movie name of your choice}" and get back:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
Utilizing the Tweet npm - you can get up to my last 20 tweets by inputting "my-tweets"

Finally - if you just want something random - type "do-what-it-says" and this will use the node fs package to read a random.txt file and run the given command.
