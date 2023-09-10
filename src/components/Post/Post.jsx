import React, { useEffect, useRef, useState } from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublicIcon from '@mui/icons-material/Public';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import {Users } from "../../DammyData";

export default function Post(props) {


  const User = Users.filter(user=> user.id=== props.post.userId); //everyTime overwrite on array to be index 0 when you launch component
 

  const ref = useRef(null);
  const lov = useRef(null);
  const com = useRef(null);
  const [state,setState] = useState({
    like:props.post.like,
    love:props.post.love,
  });

  useEffect(()=>{
   const handleLike =(e)=>{   
    setState(prev =>({...prev, like:state.like+1}))
     
   }
   const handleLove= (e)=>{
    setState(prev=>({...prev, love:state.love+1}))
   }
   

   let el =ref.current;
   let ellov = lov.current;
  

    el.addEventListener('click',handleLike);
    ellov.addEventListener('click',handleLove);
  })
  return (
    <div className="Post">
        <div className="postwrapper">
            <div className="PostTop">
                <div className="PostTopLeft">
                    <img src={User[0].profilePicture} className='PostImag' alt=""/>
                    <div className="psotDetails">
                    <span className='PostName'>{User[0].username}</span>
                    <div className="PostInfo">
                    <span className="PostDate">{props.post.date}</span>
                    <PublicIcon className='publicIcon'/>
                    </div>

                    </div>
                </div>
                <div className="PostTopRight">
                  <MoreVertIcon className='PostVertIcon'/>
                  <CloseIcon/>
                </div>
            </div>
            <div className="PostCenter">
                <span className="postcentertext">{props.post?.desc}</span>
                <img src={props.post.photo} className='CeneterImage' alt=""/>
            </div>
            <div className="PostBottom">
               
               <div className="BottomItem">
                <a ref={ref} ><ThumbUpOffAltIcon   style={{color : "#0d6efd"}} className='postBottomIcon' alt=""/></a>
             <span className='IconText' style={{color : "#0d6efd"}}>{state.like} Like</span>
               </div>
               <div className="BottomItem">
              <a ref={lov}><FavoriteBorderIcon  style={{color:'red'}} className='postBottomIcon'/></a> 
             <span className='IconText' style={{color:'red'}}>{state.love} Love</span>
               </div> 
               <div className="BottomItem">
              <ChatBubbleIcon className='postBottomIcon' style={{color:'goldenrod'}}/> 
             <span className='IconText' style={{color:'goldenrod'}} >30 Comments</span>
               </div>


             <ShareIcon className='postBottomIcon'/>
          
      </div>
        </div>
    </div>
  )
}
