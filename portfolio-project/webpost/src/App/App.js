import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Login from '../component/Login/Login'
import Signup from '../component/SignUp/Signup';
import Home from '../component/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
