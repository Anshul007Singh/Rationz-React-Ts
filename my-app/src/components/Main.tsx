import React, { useState } from 'react';
import Header from './Header';
import Login from './login/Login';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CartContextDataProvider from './helpers/CartContextData';
import { AuthProvider } from './helpers/AuthContext';

const Main:React.FC = (props)=> {

    const [isLogin, setIsLogin] = useState(false);
    const [isLoginUserName , setIsLoginUserName] = useState('')

    const isLoginHandler = (isLoginUser: boolean)=>{
        setIsLogin(isLoginUser);
    }

    const isLogoutHandler=()=>{
        setIsLogin(false)
    }
    const loggedUserName = (loggedUserName:string)=>{
      setIsLoginUserName(loggedUserName)
    }

  return (
    <div className="">
          <CartContextDataProvider>
            <AuthProvider>
            <Header isLogin={isLogin} onLogout = {isLogoutHandler} loggedUserName = {isLoginUserName}/>
            {isLogin ? <Home/> : <Login isLoginHandler = {isLoginHandler} loggedUserName ={loggedUserName}/>}
            </AuthProvider>
          </CartContextDataProvider>
    </div>
  );
}

export default Main;
