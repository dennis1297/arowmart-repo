import React from 'react';
import {useStateValue} from "./StateProvider";
import pic from "../src/img/checkoutblue1.png";
import Header from './Header';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";


function Checkout () {
  const [{basket}] = useStateValue ();
 return (
    <>
        <Header/>
     <div className='checkout'>
     <div className='checkout__left'>
     <img className='checkout__ad' src={pic} alt="" />
     
      {basket?.length === 0 ? (
          <div>
              <h2 className='heading'>Your Shopping Basket is empty</h2>
              <div className='subheading'>
              <p>
                  You have no items in your Basket. To buy one or more items, click""Add to basket" next to the item.
              </p>
              </div>
          </div>
      ) : (
          <div className='heading'>
            <h2>Your Shopping Basket</h2>
            {/* {list out all the checkout produts} */}
              {basket?.map ((item=>(
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
            )))}
           </div>
          )}
         </div>
         {basket.length>0 && (
             <div className='checkout__right'>
             <Subtotal/>
          </div>
         )}
        </div>
        </>
       
       );
}

export default Checkout;
