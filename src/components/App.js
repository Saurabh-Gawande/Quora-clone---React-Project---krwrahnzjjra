import React, { useState } from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { selectUser } from './UserSlice';
import { useSelector} from 'react-redux'
import Widget from './Widget';
import Login from '../auth/Login';


const App = () => {
 
  const [login ,setLogin]= useState(false);
  
  function handleSignIn(){
    setLogin(true);
  }

  const user  = useSelector(selectUser)
   console.log(user)
  return (
  
    login ? (<> <div id="main">
    <Navbar/>
     <div className='quora-content'>
     <Sidebar/>
     <Feed/>
     <Widget/>
     </div>
   </div></>):(<Login handleSignIn={handleSignIn} />)
    
  )
}


export default App;
