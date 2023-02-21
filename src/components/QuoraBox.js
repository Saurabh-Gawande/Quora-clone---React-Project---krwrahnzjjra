import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/QuoraBox.css'
import { selectUser } from './UserSlice'

function QuoraBox() {
 const user = useSelector(selectUser);

  return (
    <div className='quorabox'>
     <div className='quorabox-info'>
        <Avatar  src={user.photo}/>
        <h5>{user.displayName}</h5>
     </div>
     <div className='quorabox-quora'>
        <p>What is your question ?</p>
     </div>
    </div>
  )
}

export default QuoraBox
