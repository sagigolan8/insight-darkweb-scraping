import React, { useState } from "react";
import Ringtone from './ringtone/Ringtone'


function Subheader({ filterNewPosts, newPosts, showNewPosts , posts, setFilteredPosts, notification }) {
    const [wordEntered, setWordEntered] = useState("");
    const filterPosts = filterNewPosts ? newPosts : posts //who we want to filter old posts or new posts
    const handleFilter = ({ target: { value } }) => {
      const searchWord = value.toLowerCase();
      setWordEntered(searchWord);
      let newFilter = filterPosts.filter(({ title }) => title.toLowerCase().includes(searchWord));
      if (searchWord === "") {
        setFilteredPosts([]);
      } else {
        setFilteredPosts(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredPosts([]);
      setWordEntered("");
    };
  return (
    <nav
    style={{padding:'2% 5% 0% 0%'}} 
    className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"></a>
            <form className="form-inline ringtone-inline">
              <div onClick={()=>showNewPosts()} className="ringtone-position"  >
              <Ringtone notification={notification} />
              </div>
            <input
            className="form-control mr-sm-2 filter-input"
            type="search" 
            placeholder="Search Posts" 
            aria-label="Search"
            value={wordEntered}
            onChange={handleFilter}
            />

            </form>
        </nav>
  )
}

export default Subheader;