import React,{ useEffect } from 'react'
import { sentimentScore } from '../services/helperFuncs'
import { nanoid } from 'nanoid'
import Post from './Post'

export default function Posts({ newPosts, filterNewPosts, filteredPosts, posts, notification }) {
    if(filterNewPosts)
    posts = newPosts

    useEffect(() => {
        return () => {
            
          }
    }, [notification])
    
  return (
    <div>
          {
          filteredPosts.length !== 0
          ?
          filteredPosts.map((post)=> <Post key={nanoid()} borderColor={sentimentScore(post.title,post.content)}  post={post} />)
          :
          posts.map((post)=> <Post key={nanoid()} borderColor={sentimentScore(post.title,post.content)}  post={post} />)
          }
    </div>
  )
}
