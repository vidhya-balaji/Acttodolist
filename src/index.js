import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginIn from './components/LoginIn';
import SignUp from './components/SignUp';
import { useState } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
function UserList()
{
   const [userlist, setuserlist] = useState([{
          username: 'avira',
          Password: '1234'
      }, {
          username: 'avini',
          Password: '1234'
      }, {
          username: 'emi',
          Password: '1234'
      }])
  return(
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginIn userlist={userlist} setuserlist={setuserlist}/>}></Route>
      <Route path='/signup' element={<SignUp userlist={userlist} setuserlist={setuserlist}/>}></Route>
        <Route path='/todolist' element={<App/>}></Route>

      </Routes>
    </BrowserRouter>

  </div>
);

}
root.render(<UserList></UserList>)