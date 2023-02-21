import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Post.css'
import { selectUser } from './UserSlice'
import Modal from 'react-modal';
import setQuestionInfo, { selectQuestionId, selectQuestionName }  from './QuestionSlice'
import db from '../feactures/firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"



function Post({ Id, question, imageUrl, timestamp, users }) {
 
   const [modalOpen , setModalOpen] = useState(false);
    const user = useSelector(selectUser);
    const [answer , setAnswer] = useState("");
    const [getAnswer , setGetAnswer] = useState ([]);

    const questionName = useSelector(selectQuestionName);
    const questionId = useSelector(selectQuestionId);
    

    const dispatch = useDispatch();

    useEffect(() => {
      if (Id) {
        db.collection("questions")
          .doc(Id)
          .collection("answer")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
          setGetAnswer(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
            )
            );
          }
        }, [Id]);
        console.log(answer)
  
    function handleAnswer(e){
      e.preventDefault();

        db.collection("questions").doc(Id).collection("answer").add({
          user: user,
          answer: answer,
          questionId: Id,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      
      console.log(question);
      setAnswer("");
      setModalOpen(false);
    }

 
  
  return (
    <div className='post'> 

      <div className='post-info'
       onClick={()=> dispatch(setQuestionInfo({
        questionId : Id, 
         questionName : question,
       }))}
      >
        <Avatar  src={users.photo}/>
        <h5>{user.dispalyName ? user.dispalyName : user.email}</h5>
        <small>{new Date(timestamp?.toDate()).toLocaleString() }</small>
      </div>

      <div className='post-body'>

        <div className='post-ques'>
            <p>{question}</p>
        <button className='post-btn' onClick={()=>setModalOpen(true)}>Answer</button>
        </div>

         < Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose ={()=>setModalOpen(false)}
        shouldCloseOnOverlayClick= {false}
        style= {{
          overlay :{
            width: 700,
        height: 600,
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: "1000",
        top: "50%",
        left: "50%",
        marginTop: "-300px",
        marginLeft: "-350px",
          } 
        }}
      >
        <div className='modal_question'> 
          <h1>{question}</h1>
          <p>
            asked by <span className='name'>{user.email  }</span>{""}
            on <span className='name'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
          </p>
        </div>  
        <div className='modal_answer'>
          <textarea placeholder='Enter your answer' type='text' 
           value={answer}
           onChange={(e)=>setAnswer(e.target.value)}
          />
        </div>  
          <div className='modal-button'>
          <button onClick={()=>setModalOpen(false)} className='cancle'>Cancle</button>
          <button type='submit' className='add' onClick={handleAnswer}>Add Answer</button>
          </div>        
            </Modal>
            
        <div className='post-ans'>
        {getAnswer.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px"  , display : 'flex' , }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        <img src={imageUrl} alt="" />
      </div>
      <div className='post-footer'>
        <div className='post-footerAction'>
            <ArrowUpwardOutlined/>
            <ArrowDownwardOutlined/>
        </div>
            <RepeatOutlined/>
            <ChatBubbleOutlineOutlined/>
        <div className='post-footerLeft'>
            <ShareOutlined/>
            <MoreHorizOutlined/>
        </div>
      </div>
    </div>
    
  )
  
}

export default Post
