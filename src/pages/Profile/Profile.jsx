import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TopBar from "../../components/TopBar/TopBar"
import SideBar from "../../components/SideBar/SideBar"
import Feed from "../../components/Feed/Feed"
import RightBar from "../../components/RightBar/RightBar"
import "./Profile.css"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Profile() {
  return (
   <>
    <TopBar/> 
      <Container fluid >
        <Row  className='ProfileInfo'>
      <Row className='One'>
      <div className="ProfileTopRightBar">
        <div className="ProfileImgs">
        <img src="assets/persons/Pro.jpg" alt="" className='ProfileCoverImg' />
        <img src="assets/persons/3.jpeg" className='ProfileImg'/>
         <div className="Icon">
         <CameraAltIcon className='ProfileImgIcon'/>
         </div>
        </div>
       
        </div>
      </Row>
         
          <Row className="Two">
            <Col md={3}></Col>
            <Col md={4}>
            <div className="ProfileDetails">
            <span className="ProfileName">Aliaa Adel</span>
            <a className='FriendsNumber' href=''><span >347 Friends</span></a>
         </div>
         </Col>

         <Col md={5}>
            <div className="ProfileButtons">
                <Button as="a" className='btns' variant="primary">+ Add to story</Button>
                <Button as="a" className='btns BtnShadow '><EditIcon/> Edit profile</Button>
                <Button as="a" className='btns BtnShadow '><KeyboardArrowDownIcon/></Button>
            </div>
         </Col>
          
         </Row> 
        
             
        </Row>

        

        <Row>
        <Col md={3}>
      <SideBar/>
      </Col>
      <Col md={6} className='Mid'>
      <Feed/>
      </Col>
      <Col md={3}>
      <RightBar profile/>
      </Col>
               
        </Row>
  
      </Container>
   </>
  )
}
