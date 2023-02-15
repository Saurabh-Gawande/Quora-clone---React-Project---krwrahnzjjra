import React from 'react'
import '../styles/Feed.css'
import Post from './Post'
import QuoraBox from './QuoraBox'
function Feed() {
  return (
    <div className='feed'>
      <QuoraBox/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
