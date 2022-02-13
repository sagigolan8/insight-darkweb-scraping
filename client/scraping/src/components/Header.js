import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import ListIcon from '@mui/icons-material/List';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';

export default function Header({showPosts}) {
  return (
    <nav className='border border-left-0 border-right-0 border-top-0'>
       <a className='navbar-brand' id="stronghold-paste" onClick={()=>showPosts()}>
       Stronghold Paste 
       </a> 
       <span className='categories'>
       <a className='category' id="archives" onClick={()=>showPosts()}>
       <ListIcon className='icons'/>
       Archives
       </a>
       <a className='category' href="#"><LocalFireDepartmentIcon className='icons'/>Trending</a>
       <a className='category' href="#"><CollectionsBookmarkRoundedIcon className='icons'/>Docs</a>
      </span>
    </nav>
      
  )
}
