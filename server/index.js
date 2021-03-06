const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fetchDataRouter = require("./routers/fetchData");
const Post = require("./models/postsSchema")
const app = express();

const port = process.env.PORT
const db_uri = process.env.DB_URI
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(db_uri,config).then(()=>{
console.log('connected to database successfully');
}).catch(()=>{
console.log('connection to database failed');
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/fetchData", fetchDataRouter);

app.post('/',async (req, res) => {
  const post = req.body
  const response = await Post.create(post)
  res.send(response)
})

app.get('/',async (req, res) => {
  console.log('HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  const response = await Post.find({})
  res.send(response)
})

app.delete('/',async (req, res) => {
  const response = await Post.deleteMany({})
  await Post.create({
    "title": "Dark Leak Market",
    "author": "Posted by Anonymous",
    "content": "DARK LEAK MARKET Leaked databases & documents. http://ydnvjy3hfvmhkf7ayjhfttfamanpyholz2he4sejeokk3ot5ms4fa5ad.onion/",
    "date": "07 Feb 2022 21:00:15"
  })
  res.send(response)
})


app.listen(port, () => {
  console.log(`running on ${port}`);
});

