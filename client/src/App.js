import React, { useState } from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import { Button, Form, Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import axios from "axios";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Driver from "./components/Driver";
import Rider from "./components/Rider";
import DriverDashboard from './components/DriverDashboard';
import DriverDetail from './components/DriverDetail';
import RiderDashboard from './components/RiderDashboard';
import RiderDetail from './components/RiderDetail';
import RiderRequest from './components/RiderRequest';
import { isRider } from './services/AuthService';

function App () {
    const [isLoggedIn, setLoggedIn] = useState(() =>{
        return window.localStorage.getItem('taxi.auth') !== null;
    });

    const logIn = async (username, password) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/login/`;
        try {
            const response = await axios.post(url, { username, password });
            window.localStorage.setItem(
              'taxi.auth', JSON.stringify(response.data)
            );
            setLoggedIn(true);
            return { response, isError: false };
        }
        catch (error) {
            console.error(error);
            return { response: error, isError: true };
        }
    };
    const logOut = () => {
        window.localStorage.removeItem('taxi.auth');
        setLoggedIn(false);
    };

    return (
      <Routes>
          <Route path='/' element={<Layout isLoggedIn={isLoggedIn} logOut={logOut}/>}>
              <Route index element={<Landing isLoggedIn={isLoggedIn} />} />
              <Route path='signup' element={<Signup isLoggedIn={isLoggedIn} />} />
              <Route path='login' element={<Login isLoggedIn={isLoggedIn} logIn={logIn} />} />
              <Route path='rider' element={<Rider />} />
              <Route path='driver' element={<Driver />} />
          </Route>
          <Route path='driver' element={<Driver />}>
              <Route index element={<DriverDashboard />} />
              <Route path=':id' element={<DriverDetail />} />
          </Route>
          <Route path='rider' element={<Rider />}>
              <Route index element={<RiderDashboard />} />
              <Route path='request' element={<RiderRequest />} />
              <Route path=':id' element={<RiderDetail />} />
          </Route>
      </Routes>
    );
}
function Layout ({ isLoggedIn, logOut }) { // changed
  return (
    <>
      <Navbar bg='light' expand='lg' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo'>Taxi</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          {/* changed */}
          <Navbar.Collapse className='justify-content-end'>
              {
                  isRider() && (
                    <Nav className='me-auto'>
                      <LinkContainer to='/rider/request'>
                        <Nav.Link data-cy='request-trip'>Request a trip</Nav.Link>
                      </LinkContainer>
                    </Nav>
                  )
              }
              {
                  isLoggedIn && (
                    <Form>
                      <Button data-cy='logOut' type='button' onClick={() => logOut()}>Log out</Button>
                    </Form>
                  )
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='pt-3'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
