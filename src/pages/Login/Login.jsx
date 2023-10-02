import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Login.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Login() {
  return (
    <div className='Login'>
        <div className="LoginWrapper">
            <div className="LoginLeft">
                <h3 className="LoginLogo">LamaSocial</h3>
                <span className="LoginDesc">Contact with friends and people around you with LamaSocial</span>
            </div>
            <div className="LoginRight">
                <div className="LoginBox">
             <InputGroup>
        <Form.Control 
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
      <Form.Control
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          type='password'
        />
      </InputGroup>
      <Button  className='btn-login'>Login</Button>
      <span className="LoginForget">Forget Passord</span>
      <Button variant='success' className='Registeration'>Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
