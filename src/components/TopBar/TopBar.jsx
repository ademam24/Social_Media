import React from 'react';
import './TopBar.css';
import SearchIcon from '@mui/icons-material/Search';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function TopBar() {
  return (
    <Container fluid className='Contain'>
     <Row >
     <div className='TopBar-container' >
      <Col md={3}> 
      <div className="TopBarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      </Col>
     <Col md={5}>
     <div className="TopBarCenter">
        <div className="searchbar">
          
          <InputGroup className="mb-3 topbarsearch">
        <InputGroup.Text className='search' id="basic-addon1"><SearchIcon/></InputGroup.Text>
        <Form.Control
          placeholder="Search for Peaople and Posts"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </div>
      </div>
     </Col>
     <Col md={4}>
     <div className="TopBarRight">
        <div className="topbarlinks">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">TimeLine</span>
        
       </div>
        <div className="topbarIcons">
        <div className="topbarIconItem">
           <PersonIcon/>
           <span className="tobarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
           <ChatIcon/>
           <span className="tobarIconBadge">8</span>
          </div>
          <div className="topbarIconItem">
           <NotificationsIcon/>
           <span className="tobarIconBadge">5</span>
          </div>
        </div>
        <Image src="/assets/profile/2.jpg" className='topbarImg' roundedCircle />
      </div>
     </Col>
  
    </div>
     </Row>
    </Container>
  )
}
