const Twit = require('twit')
const robobento = require('./robobento');
 
const T = new Twit({
  consumer_key:         'Nkj1bTe1ltvqKdGPmmGqucaZO',
  consumer_secret:      'Zq9PU2W1tT8DICWGUyOo98dKlSlu5HkW9jU0oC8qkIiH7WEmWU',
  access_token:         '24971779-xzz6ay6NGU9BQYkh5eO8oueoOv9yYIJa6lG3rYuZ2',
  access_token_secret:  'z4YBgJVIqbhY3YsKWAox5lz436nN4fkI6LdQYud1At9U1',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})
 
//Test loop
for (i=0; i<20; i++){
console.log(robobento.getHeadline());
console.log(" ");

}

/*

function tweet() { 
T.post('statuses/update', { status: robobento.getHeadline() }, function(err, data, response) {
  if (err) throw err;
	
console.log("Tweeted: " + data.text)
});
}


tweet();
setInterval(tweet, 36000);
*/