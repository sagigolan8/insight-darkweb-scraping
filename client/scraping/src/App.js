import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import axios from 'axios'
import { nanoid } from 'nanoid'
import Header from './components/Header';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [initializePosts, setInitializePosts] = useState(true);
  const getPosts = async () => {
    try{
      const res = await axios.get('http://localhost:8080');
      console.log(res.data);
      return res.data
      
    } catch (err) {
      console.error(err);
      }
    }

  useEffect(() => {
    async function fetchData() {
      console.log("initialize posts");
      const response = await getPosts()
      console.log(response);
      setPosts(response.reverse())
      setInitializePosts(false)
    }
    if(initializePosts)
    fetchData()
    const source = new EventSource(`http://localhost:8080/fetchData`);
    source.onmessage = function (event) {
    console.log(Date(Date.now()).slice(0,24));
    const data = JSON.parse(event.data)
    console.log(data);
        if(data.updateData && data.updateData.length > 0){
          setPosts(data.updateData.reverse())
        }
    }

}, [])

  
  
  return (
    <div>
      <Header />
        <div className="container">
          <br/>
          {posts.map((post)=> <Post key={nanoid()} post={post} />)}
      <br/>
        </div>
    </div>
  )
}

