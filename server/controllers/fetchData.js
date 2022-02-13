const { EventEmitter } = require('events')
const { checkForUpdate } = require('./checkUpdate')
const { getTorLastPost,formatDate } = require('../services/searchPosts')

const TIME = 200*60 // Two minutes
const Post = require('../models/postsSchema');
const emitter = new EventEmitter();

exports.fetchData = (req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin":   "*",
    "Cache-Control": "no-cache",
    // "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
  });

  emitter.on("update", async () => {
    console.log("Enters update emitter");
    try {
      // let myLastPost = await Post.find({}).sort({"date": -1}).limit(1) 
      // myLastPost = formatDate(myLastPost[0].date.toString())
      // console.log("🚀 ~ file: fetchData.js ~ line 21 ~ emitter.once ~ myLastPost", myLastPost)
      // let torLastPost = await getTorLastPost() //implement bt date....
      // torLastPost = torLastPost.date
      // let updateData = await checkForUpdate(myLastPost,torLastPost) // returns empty array or new posts array
      // if(updateData)
      // updateData = updateData.reverse().slice(updateData.length-16)
      // return res.write(`data:${JSON.stringify({ updateData })}\n\n`);
      return res.write(`data:${JSON.stringify({ updateData:'' })}\n\n`);
    } catch (err) {
      console.log(err);
    }
  });

  setInterval(() => {
  emitter.emit("update");
  }, TIME);


};
