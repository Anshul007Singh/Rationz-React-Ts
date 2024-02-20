import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../helpers/CartContextData';
import CartList from './CartList';
import Payment from './Payment';

interface CartToggle {
    onClose: () => void;
}

const CartPopup: React.FC<CartToggle> = ({onClose}) => {

const cartContextData =  useContext(CartContext);

const totalCart = cartContextData?.items.reduce((totalPrice,item:any)=>
  totalPrice + item.quantity * item.price,0);


  return (
    <div className='cart'>
        <div className="cart-show">        
            <h2 className='mb-4'>Your Cart</h2>
            <div className='d-flex justify-content-evenly fw-bold'>
                <p className='ms-5'>Title</p>
                <p className='mx-4'>Quantity</p>
                <p className='mx-2'>Price</p>
                <p className='mx-4'>Actions</p>
            </div>
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
            {totalCart !== 0 ? <Payment currency={'USD'} totalAmount={`${totalCart}`} description= {'titldfdfdfdfddfdf'}/> : <h4><br /><p className='text-danger'>Please add some item to cart.</p></h4> }  
            </div>
        </div>
    </div>
  );
};

export default CartPopup;