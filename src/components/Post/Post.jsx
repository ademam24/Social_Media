import React from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublicIcon from '@mui/icons-material/Public';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

export default function Post(props) {
    console.log("Hello");
  return (
    <div className="Post">
        <div className="postwrapper">
            <div className="PostTop">
                <div className="PostTopLeft">
                    <img src={props.link} className='PostImag' alt=""/>
                    <div className="psotDetails">
                    <span className='PostName'>{props.name}</span>
                    <div className="PostInfo">
                    <span className="PostDate">5 min</span>
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
                <span className="postcentertext">Changing your behavior</span>
                <img src= {props.src} className='CeneterImage' alt=""/>
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
