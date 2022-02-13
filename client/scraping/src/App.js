import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import { nanoid } from 'nanoid'
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import DarkMode from './components/DarkMode';
import {
  sentimentScore,
  getPosts  
} from './services/helperFuncs'

export default function App() {
  const [newPosts, setNewPosts] = useState([])
  const [notification, setNotification] = useState(0)
  const [allPosts, setAllPosts] = useState([]);

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [initializePosts, setInitializePosts] = useState(true);
  
  // const showNewPosts = () => {
  //   setNewPosts(newPosts)
  // }
  
  const showPosts = () =>{
    setPosts(posts)
  }

  const getAllPosts = async () => {
      const response = await getPosts()
      setPosts(response)
      setAllPosts(response)
      setInitializePosts(false)
  }

  useEffect(() => {
    if(initializePosts)
    getAllPosts()
    const source = new EventSource(`http://localhost:8080/fetchData`);
    source.onmessage = function (event) {
    const { updateData } = JSON.parse(event.data)
    console.log(updateData)
        if(updateData){
          setNewPosts(updateData)
          setNotification(updateData.length + notification)
          console.log(newPosts)
          console.log(notification)
        }
    }
}, [])


  return (
    <div>
      <DarkMode/>
      <Header
      showPosts={showPosts} 
      />
      <SubHeader
      // showNewPosts={showNewPosts}
      notification={notification}
      posts={posts}
      setFilteredPosts={setFilteredPosts} 
      /> 
        <div className="container">
          <br/>
          {
          filteredPosts.length !== 0
          ?
          filteredPosts.map((post)=> <Post key={nanoid()} borderColor={sentimentScore(post.title,post.content)}  post={post} />)
          :
          posts.map((post)=> <Post key={nanoid()} borderColor={sentimentScore(post.title,post.content)}  post={post} />)
          }
      <br/>
        </div>
    </div>
  )
}

