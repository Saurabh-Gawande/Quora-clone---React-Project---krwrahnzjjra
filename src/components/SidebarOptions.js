import { Add } from '@material-ui/icons'
import React from 'react'
import '../styles/SidebarOptions.css'
function SidebarOptions() {
  return (
    <div className='sidebarOptions'>

        <div className='sidebarOption'>
          <img src="src\Images\History.jpg" alt="History" />
          <p>History</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\buisness.jpg" alt="Business" />
          <p>Business</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\psychology.jpg" alt="Psychology" />
          <p>Psychology</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\cooking.jpg" alt="Cooking" />
          <p>Cooking</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\Music.jpg" alt="Music" />
          <p>Music</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\Science.jpg" alt="Science" />
          <p>Science</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\health.jpg" alt="Health" />
          <p>Health</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\movies.jpg" alt="Movies" />
          <p>Movies</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\Technology.jpg" alt="Technology" />
          <p>Technology</p>
        </div>

        <div className='sidebarOption'>
          <img src="src\Images\Education.jpg" alt="Education" />
          <p>Education</p>
        </div>

        <div className='sidebarOption'>
          <Add/>
          <p className='text'>Discover Spaces</p>
        </div>

    </div>
  )
}

export default SidebarOptions
