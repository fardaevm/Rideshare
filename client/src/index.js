import 'bootswatch/dist/lumen/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />}/>

                <Route index element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
