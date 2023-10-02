import React from 'react';
import './Home.css';
import TopBar from '../../components/TopBar/TopBar';
import SideBar from '../../components/SideBar/SideBar';
import RightBar from '../../components/RightBar/RightBar';
import Feed from '../../components/Feed/Feed';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <TopBar/> 
      <Container fluid>
        <Row>
        <Col md={3}>
      <SideBar/>
      </Col>
      <Col md={6} className='Mid'>
      <Feed/>
      </Col>
      <Col md={3}>
      <RightBar />
      </Col>
        </Row>
  
      </Container>
    
    </div>
  )
}
