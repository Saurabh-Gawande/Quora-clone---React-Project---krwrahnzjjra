
import React, { useEffect, useState } from 'react'
import db from '../feactures/firebase';
import '../styles/Feed.css'
import Post from './Post'
import QuoraBox from './QuoraBox'
function Feed() {

  const [posts , setPosts] = useState ([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className='feed'>
      <QuoraBox/>
      {
       posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imgUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))
      }
      
    </div>
  )
}

export default Feed
