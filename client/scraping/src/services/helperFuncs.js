import axios from 'axios';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();
const options = {
  extras: {
    's3x':-20,
    'porn':-20,
    'teen':-20,
    'old':-20,
    'child':-20,
    '❤️':-20,
  }
};

const sentimentScore = (title,content) => {
  const { score } = sentiment.analyze(`${title} ${content}`, options)
    if(score > 0)
      return "rounded border-warning border-2 border pre-parent"
    else if(score < 0)
      return "rounded border-danger border-2 border pre-parent"
    else
      return "rounded border-2 border pre-parent"
  }


  const getPosts = async () => {
    try{
      const res = await axios.get('http://localhost:8080');
      return res.data
    } catch (err) {
      console.error(err);
      }
    }


 export {
    sentimentScore,
    getPosts,
}