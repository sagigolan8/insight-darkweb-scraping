import React from 'react'
import './ringtone.scss'

export default function Ringtone({notification, showNewPosts}) {
  return (
    <div onClick={()=>showNewPosts()} className='ringtone'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <button type="button" className="icon-button">
    <span className="material-icons">notifications</span>
    <span className="icon-button__badge">{notification}</span>
  </button>
    </div>
  )
}
