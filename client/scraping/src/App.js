import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import { nanoid } from 'nanoid'
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import {
  sentimentScore,
  getPosts  
} from './services/helperFuncs'
import Posts from './components/Posts';

export default function App() {
  const [newPosts, setNewPosts] = useState([])
  const [notification, setNotification] = useState(0)
  const [allPosts, setAllPosts] = useState([]);  // All documents from db and keep updating

  const [filterNewPosts, setFilterNewPosts] = useState(false)
  const [posts, setPosts] = useState([]); // All documents from db in first connection
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtered posts - changes every search
  // Make sure the posts from the first connection come only once
  const [initializePosts, setInitializePosts] = useState(true);   
  
  const showNewPosts = () => {
    setNotification(0)
    setFilterNewPosts(true)
    setNewPosts(newPosts)
  }
  
  const showPosts = () =>{ 
    setFilterNewPosts(false)
    if(notification === 0){
    setAllPosts([...newPosts,...allPosts])
    }
    setPosts(allPosts)
    setNewPosts([])

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
    console.log(Date(Date.now()).slice(0,24))
    console.log(updateData)
        if(updateData){
          setNewPosts(updateData)
          setNotification(updateData.length + notification)
        }
    }
}, [])


  return (
    <div>
      <Header
      showPosts={showPosts} 
      />
      <SubHeader
      filterNewPosts={filterNewPosts}
      showNewPosts={showNewPosts}
      notification={notification}
      posts={posts}
      newPosts={newPosts}
      setFilteredPosts={setFilteredPosts} 
      /> 
        <div className="container">
          <br/>
          <Posts
          filterNewPosts={filterNewPosts}
          notification={notification} 
          newPosts={newPosts} 
          filteredPosts={filteredPosts} 
          posts={allPosts} 
          />
        
      <br/>
        </div>
    </div>
  )
}

