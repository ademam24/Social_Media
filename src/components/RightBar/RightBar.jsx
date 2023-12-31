import React from 'react';
import './RightBar.css';
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CampaignIcon from '@mui/icons-material/Campaign';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { Users } from '../../DammyData';

export default function RightBar({profile}) {

//  const user = Users.map(u =>(
//    u= u.profilePicture
//  ));
//   console.log(user)

const HomeRightBar= ()=>{
  return(
    <>  
      <div className="RightBar-Wrapper">
    <div className="pagecontainer">
        <h5 className='pageTitle'>Your Pages and Profiles</h5>
        <ListGroup>
           <div className='Pagedetail'>
           <img src="assets/persons/Normal.jfif" className='pageImg' alt="..."/>
           <span className="pageName">BE HAPPY</span>
           </div>
          <ListGroup.Item>
            <QuestionAnswerIcon className='pageIcon'/>
            <span className='IconText'> 1 Message</span>
          </ListGroup.Item>
          <ListGroup.Item >
            <CameraswitchIcon className='pageIcon'/>
            <span className='IconText'>Switch into page</span>
          </ListGroup.Item>
          <ListGroup.Item >
            <CampaignIcon className='pageIcon'/>
            <span className='IconText'>Create Promotion</span>
          </ListGroup.Item>
        </ListGroup>
      
    </div>
    <hr/>
      <div className="birthdayContainer">
        <h2 className="BirthHead">Birthday</h2>
        <div className='BirthContainer'>
        <img  className="BirthImg" src="assets/persons/birth.jfif"/>
        <span className='birthText'> <b>Ana Foster</b> and <b>3 others friends</b> have a birthday</span>
        </div>
      </div>
      <hr/>

      <img className='adImg' src="assets/persons/ad.jfif" alt="No ad...." />
      <hr/>
      <h4 className="rightbarTitle">Online Contacts</h4>
      <ListGroup>
          {
             Users.map(u=>(
              <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src={u.profilePicture}/>
                <span className='profileName'>{u.username}</span>
              </div>
            </ListGroup.Item>
             ))
          }

       
        
      </ListGroup>
  </div>
  </>
  )
}

const ProfileRightBar = ()=>{
  return(
   
    <div className="RightBar-Wrapper">
      <h4 className='RightBarTitle'>User Information</h4>
        <div className="rightbar-info">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City :</span>
            <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Mardid</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Status :</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
      <h4 className="RightBarFriendsInfo">Friends</h4>
      <div className="rightbarfriendsinfo">
        {Users.map(user=>{
          if(user.id< 7){
           return( <div className="friendsfollowing">
           <img className='rightbarFollowingImg' src={user.profilePicture}/>
           <span className="rightbarusername">{user.username}</span>
         </div>)
          }else{
              console.log(user.id)
          }
        }
          
        )}

      
      </div>
    </div>
    
  )
}
  return (
     <div className="RightBar">
       {profile ? <ProfileRightBar/>: <HomeRightBar/> }
     </div>
  )
}
