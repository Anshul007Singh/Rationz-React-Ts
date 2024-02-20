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
      <li key={key} className='d-flex justify-content-evenly '>
        <p className=''>{title}</p>
        <p className='ms-4'>{quantity}</p>
        <p className='mx-4'>{price}</p>
        <div className='d-flex mx-4'>
          <button className='mx-2' onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
        </div>
      </li>
  );
}

export default CartList;
