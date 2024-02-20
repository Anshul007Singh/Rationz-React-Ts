import React, { useEffect, useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Home:React.FC = ()=> {

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
                .then(res=>res.json())
                .then(data=> 
                    setItemData(data.products)  
                )        
    }, []);
      
  return (
    <div className="container mt-3">
      <div className='row d-flex justify-content-evenly'>
      {itemData.map((itemData,i)=>(
        <Card productData = {itemData} key={i}/>
      ))}
      </div>
    </div>
  );
}

export default Home;
