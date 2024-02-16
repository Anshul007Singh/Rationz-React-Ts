import { useContext } from 'react';
import { CartContext } from '../helpers/CartContextData';

interface productList {
    productData : any
    
}

const Card:React.FC<productList> = ({productData},props)=> {

const cartContextMethods =  useContext(CartContext);

const addToCartHandler=()=>{
    cartContextMethods?.addItem(productData)
 }

  return ( 
    <div className=' col-md-3 mb-3' >
        <div className="card mb-3 " key={productData.id} >
            <div className="card-body">
                <h5 className="card-title">{productData.brand}</h5>
                <p className="card-text">{productData.description}</p>
                <p className="card-text">${productData.price}</p>
                <a  className="btn btn-primary" onClick={addToCartHandler}>Add to Cart</a>
            </div>
        </div>
    </div>
  );
}

export default Card;
