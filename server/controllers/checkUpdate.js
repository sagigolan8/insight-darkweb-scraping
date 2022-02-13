const moment = require("moment")
const { getTorPosts } = require("../services/searchPosts")
const Post = require("../models/postsSchema")

//string.replace(/  +/g, ' ')--White spaces --The HiddenWiki UNCEN

exports.checkForUpdate = async (myLastPostDate, torLastPostDate) => {
    myLastPostDate = moment(`${myLastPostDate} z`)
    torLastPostDate = moment(`${torLastPostDate} z`)
    if(torLastPostDate.isAfter(myLastPostDate)){ //so i need to add it to db, --checking by comparing dates
        console.log("found some new post");
        const newTorPosts = await getTorPosts()
        let myNewPosts = addAllNewPosts(myLastPostDate,newTorPosts)
        if(myNewPosts.length){
            myNewPosts = (await myNewPosts).reverse()
        }
        return myNewPosts
    }
    else{
        console.log("Its all up to date");
        return null
    }
    
}

const addAllNewPosts = async (myLastPostDate,newTorPosts) =>{
    const postsToDB = []
    newTorPosts.forEach( async (torPost)=>{
    const TorPostDate = moment(`${torPost.date} z`)
    if(TorPostDate.isAfter(myLastPostDate)){ 
        postsToDB.push(torPost)
    }
})
    console.log(` found ${postsToDB.length} new posts`);
    await Post.create(postsToDB)
    return postsToDB
}


