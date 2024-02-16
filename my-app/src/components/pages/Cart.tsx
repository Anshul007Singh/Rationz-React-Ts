import React, { useContext } from 'react';
import './Cart.css';
import Modal from '../modals/Modal';
import { CartContext } from '../helpers/CartContextData';
import CartList from './CartList';

interface CartToggle {
    onClose: () => void;
}

const CartPopup: React.FC<CartToggle> = ({onClose}) => {

const cartContextData =  useContext(CartContext);

const totalCart = cartContextData?.items.reduce((totalPrice,item:any)=>
  totalPrice + item.quantity * item.price,0)

  return (
    <div className='cart'>
        <div className="cart-show">        
            <h2 className='mb-4'>Your Cart</h2>
            <ul>
                  {cartContextData?.items.map((item,i)=>(
                    <CartList 
                    key={item.id}
                    title= {item.title}
                    quantity = {item.quantity} 
                    price = {item.price}
                    onIncrease={()=> cartContextData.addItem(item)}
                    onDecrease = {()=> cartContextData.removeItem(item.id)}/>
                  ))}
            </ul>
            <p>Total Price : {totalCart}</p>
            <div className="class">
              <button  onClick={onClose} className='btn btn-danger'>Cancel</button>
              <button className='btn btn-success'>Proceed to pay</button>
            </div>
        </div>
    </div>
  );
};

export default CartPopup;