import React from 'react';
import {Link } from 'react-router-dom';
import Rating from '../Components/Rating';
import data from '../data';




export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    
   if(!product){
       return<div>Product Not Found</div>;
   }
   
    return (

        <div >
            <Link to="/">Back to result</Link>
         <div className="row top">
            
             <div className="col-2"> 
             <img classNAme="large" src={product.image} alt={product.name}/>
              </div>
             <div className="col-1">
                <ul>
                    <li>
                    <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews}/>
                    </li>
                    <li>Price: ${product.price}</li>
                    <li>Description: ${product.description}</li>
                </ul>

                   </div>
            <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <div classname="row">
                           <div>Price</div>
                           <div className="price">${product.price}</div> 
                        </div>
                    </li>


                    <li>
                        <div classname="row">
                           <div>Status</div>
                           <div>
                               {product.countInStock > 0 ? ( 
                               <span className="success">In stock</span>
                               ): (
                               <span className="error">Unavail</span>
                           )}
                            </div>
                            </div>
                     </li>
                     <li>
                         <button classNAme="primary block">Add to cart</button>
                     </li>
                 </ul>
                 </div>
                 </div>
         </div>
        </div>
    );
}
