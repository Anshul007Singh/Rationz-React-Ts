import React, { useState } from 'react';
import Header from './Header';
import Login from './login/Login';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import CartContextDataProvider from './helpers/CartContextData';
import UserContextProvider from './helpers/UserInputContext';

const Main:React.FC = (props)=> {

const [isLogin, setIsLogin] = useState(false);

const isLoginHandler = (isLoginUser: boolean)=>{
    console.log(isLoginUser);
    setIsLogin(isLoginUser);
}

const isLogoutHandler=()=>{
    setIsLogin(false)
}

  return (
    <div className="">
      <UserContextProvider>
          <CartContextDataProvider>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
            </Routes>
            <Header age={0}/>
            {isLogin ? <Home/> : <Login isLoginHandler = {isLoginHandler}/>}
          </CartContextDataProvider>
        </UserContextProvider>
    </div>
  );
}

export default Main;
