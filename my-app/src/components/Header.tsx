import React, { useState } from 'react';
import { CartContext } from './helpers/CartContextData';
import { useContext } from 'react';
import Cart from './pages/Cart';

  const Header:React.FC<{isLogin:boolean, onLogout:any, loggedUserName:string}> = (props)=> {

  const cartContext =  useContext(CartContext);

  const logoutHandler = ()=>{
    props.onLogout();
  }

  const totalCart = cartContext?.items.reduce((totalItem,item)=>{
    return totalItem + item.quantity
  },0);

  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart((openCart) => !openCart);
  };

  const closeCartHandler = ()=>{
    setOpenCart(false);
  }

  return (
    <div className="">
          <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <h4 className="navbar-brand" >RationZ</h4>
                    {props.isLogin &&
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <h4 className='mt-2 ms-5 text-light'>Welcome {props.loggedUserName}</h4>
                    <div className='' style={{marginLeft:780}}>
                        <button onClick={openCartHandler} className=' btn btn-outline-light text-decoration-none text-dark fs-5 fw-bold mx-5'>Cart : {totalCart}</button>
                        <button onClick={logoutHandler} className='btn btn-danger'>Logout</button>
                    </div>
                    </div>
                    }
                </div>
          </nav> 
          {openCart ? <Cart onClose = {closeCartHandler}/> : ''}
      </div>
  );
}

export default Header;
