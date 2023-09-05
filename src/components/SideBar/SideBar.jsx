import React, { useEffect, useRef } from 'react';
import './SideBar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';





export default function () {
 
  const ref = useRef(null);
    const side =useRef(null);
    const list = useRef(null);

    useEffect(()=>{
       const handleClick = ()=>{
        console.log(list.current.style.display);

          if(list.current.style.display === '' ||list.current.style.display === 'none'){
            side.current.style.overflowY = "scroll";
            list.current.style.setProperty('display','block', 'important');
            ref.current.textContent = "Collapse";

          }
          else{
            side.current.style.overflowY = "hidden";
            list.current.style.setProperty('display','none', 'important');
            ref.current.textContent = "Show More";
          }

       };
         const el = ref.current; 
        
         el.addEventListener('click', handleClick);

         return () => {
          el.removeEventListener('click', handleClick);
        };
    },[]);

  return (
    <>
    <div ref={side} className="sidebar">
      <div className="sidebarWrapper">
      <ListGroup >
      <ListGroup.Item className='sideBarListItem'>
        <RssFeedIcon className='sideBarIcon'/>
        <span className="sideBarListItemText">Feed</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
          <ChatIcon className='sideBarIcon'/>
          <span className="sideBarListItemText">Chat</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
        <PlayCircleIcon className='sideBarIcon'/>
        <span className="sideBarListItemText">Videos</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
        <GroupIcon className='sideBarIcon'/>
        <span className="sideBarListItemText">Groups</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
        <BookmarkIcon className='sideBarIcon'/>
        <span className="sideBarListItemText">BookMark</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
      <HelpOutlineIcon className='sideBarIcon'/>
      <span className="sideBarListItemText">Questions</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
        <WorkOutlineIcon className='sideBarIcon'/>
      <span className="sideBarListItemText">Jobs</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarListItem">
        <EventIcon className='sideBarIcon'/>
      <span className="sideBarListItemText">Events</span>
      </ListGroup.Item>
      <ListGroup.Item className="sideBarlistItem">
       <SchoolIcon className='sideBarIcon' />
      <span className="sideBarListItemText">Courses</span>
      </ListGroup.Item>
      </ListGroup>
    <button  ref={ref} className='sidebarButton' > Show More </button>
      <hr className='sidebarHr'/>
      <ListGroup as="ul" ref={list} className='sidebarFriendList' >
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/0.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/2.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/3.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/4.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/5.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/8.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/7.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/6.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/1.jfif"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" className='sidebarFreind'>
            <img className='sidebarFriendImg' src="/assets/persons/9.jpeg"/>
            <span className='sidebarFreindName'> Jone Deb</span>
          </ListGroup.Item>
      </ListGroup>
      </div>
    </div>
    </>
  )
}
