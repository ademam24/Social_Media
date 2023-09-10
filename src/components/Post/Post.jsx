import React, { useEffect } from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublicIcon from '@mui/icons-material/Public';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import {Users} from "../../DammyData";

export default function Post(props) {


  const User = Users.filter(user=> user.id=== props.post.userId); //everyTime overwrite on array to be index 0 when you launch component
  // console.log(User[0].username)
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
               
                   <ThumbUpOffAltIcon className='postBottomIcon' alt=""/>
                   <FavoriteBorderIcon className='postBottomIcon'/>
                   <ChatBubbleIcon className='postBottomIcon'/>
                   <ShareIcon className='postBottomIcon'/>

               
                
                <div className="postbottomright"></div>
                
            </div>
        </div>
    </div>
  )
}
