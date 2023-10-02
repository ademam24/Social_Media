import React from 'react'
import './Feed.css';
import Share from '../Share/Share';
import Post from '../Post/Post';
import {Posts} from "../../DammyData";


export default function () {



  return (
    <div className="Feed">
       <div className="feedwrapper">
    <Share/>
   {Posts.map((p)=>( 
     <Post key={p.id} post={p}/>     
))} 

 
  </div>
    </div>
  )
}
