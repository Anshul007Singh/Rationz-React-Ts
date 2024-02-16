import React from 'react';

interface dataArray {
   key:string |number;
   title:any;
   quantity:number;
   price:number
   onIncrease:()=> void;
   onDecrease:()=> void;
}

const CartList:React.FC<dataArray> = ({key, title,quantity,price,onIncrease,onDecrease})=> {
  return (
    <div className="">
      <li key={key} className='d-flex justify-content-evenly '>
        <p className=''>{title}</p>
        <p className='mx-4'>{quantity}</p>
        <p className='me-3'>{price}</p>
        <div className='d-flex'>
          <button className='mx-2' onClick={onDecrease}>-</button>
          <p className='mx-2'>{quantity}</p>
          <button onClick={onIncrease}>+</button>
        </div>
      </li>
    </div>
  );
}

export default CartList;
