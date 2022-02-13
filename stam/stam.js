var Sentiment = require('sentiment');
var sentiment = new Sentiment();
let options = {
    'por11e1sn':300
}
var result = sentiment.analyze('bad porn');
console.log(result)