import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './helpers/CartContextData';
import { useContext } from 'react';
import Cart from './pages/Cart';
import UserContextProvider from './helpers/UserInputContext';

const Header:React.FC<{age:number}> = (props)=> {

  const cartContext =  useContext(CartContext);

const totalCart = cartContext?.items.reduce((totalItem,item)=>{
   return totalItem + item.quantity
},0)

const showCartHandler = ()=>{
    // cartContext?.showCart();
}
const [openCart, setOpenCart] = useState(false)

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
                    <Link className="navbar-brand" to={'/'}>RationZ</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        </div>
                    </div>
                    <div className='dropdown'>
                    <button onClick={openCartHandler} className='float-end btn btn-outline-light text-decoration-none text-dark fs-5 fw-bold mx-5'>Cart : {totalCart}</button>
                    </div>
                </div>
          </nav> 
          {openCart ? <Cart onClose = {closeCartHandler}/> : ''}
      </div>
  );
}

export default Header;

// const TodoItem: React.FC<{ text: string }> = (props) => {
//   return <li>{props.text}</li>;
// };

// export default TodoItem;
