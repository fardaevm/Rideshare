import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Card } from 'react-bootstrap';

function Login (props) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/#/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Log in</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Header>Log in</Card.Header>
        <Card.Body>
          <Card.Text className='text-center'>
            Don't have an account? <Link to='/signup'>Sign up!</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;