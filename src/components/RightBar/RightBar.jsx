import React from 'react';
import './RightBar.css';
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CampaignIcon from '@mui/icons-material/Campaign';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';

export default function RightBar(props) {
  return (
     <div className="RightBar">
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

          <img className='adImg' src={props.ad} alt="No ad...." />
          <hr/>
          <h4 className="rightbarTitle">Online Contacts</h4>
          <ListGroup>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/5.jpeg"/>
                <span className='profileName'>Alia Mohmed</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/9.jpeg"/>
                <span className='profileName'>Lila Ahmed</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/4.jpeg"/>
                <span className='profileName'>Nevieen Moh</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/7.jpeg"/>
                <span className='profileName'>Sara Ali</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/2.jpeg"/>
                <span className='profileName'>FeFy Abdo</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/8.jpeg"/>
                <span className='profileName'>Noran Said</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className='rightbarFriend'>
              <div className="rightbarProfileContainerContainer">
                <img className='profileImg' src="assets/persons/6.jpeg"/>
                <span className='profileName'>Salima Selim</span>
              </div>
            </ListGroup.Item>
           
            
          </ListGroup>
      </div>
     </div>
  )
}
