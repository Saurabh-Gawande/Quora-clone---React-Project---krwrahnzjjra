import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/QuoraBox.css'

function QuoraBox() {
  return (
    <div className='quorabox'>
     <div className='quorabox-info'>
        <Avatar/>
        <h5>userName</h5>
     </div>
     <div className='quorabox-quora'>
        <p>What is your question ?</p>
     </div>
    </div>
  )
}

export default QuoraBox
