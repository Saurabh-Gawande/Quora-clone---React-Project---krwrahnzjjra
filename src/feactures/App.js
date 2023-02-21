import React, { useEffect} from 'react'
import '../styles/App.css';
import { selectUser } from '../components/UserSlice';
import {login, logout} from '../components/UserSlice';
import { useDispatch, useSelector} from 'react-redux'
import Login from '../auth/Login';
import { auth } from './firebase';
import Quora from '../components/Quora'


const App = () => {

  const dispatch = useDispatch()
  const user  = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid : authUser.uid,
          photo : authUser.photoURL, 
          displayName : authUser.displayName, 
          email : authUser.email
        }))
        console.log(authUser);
      }else{
        dispatch(logout())
      }
    })
    
  },[dispatch]);

  
  return (
    user ? (<Quora/>):(<Login  />)  
  )
}


export default App;
