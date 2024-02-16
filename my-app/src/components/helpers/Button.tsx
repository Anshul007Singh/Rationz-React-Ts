import React from 'react';
import { Link } from 'react-router-dom';

const Button:React.FC<{ buttonText: string}> = ({buttonText})=> {
  return (
    <div className="">
       <button className='btn btn-light w-100 mt-4'>{buttonText}</button> <br />
    </div>
  );
}

export default Button;
