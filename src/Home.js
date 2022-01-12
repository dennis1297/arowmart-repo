import React from 'react'
import pic from "../src/img/amazonclone.png";
import "./Home.css"
import Product from './Product';
import Header from "./Header";
import Footer from './Footer';

function Home() {
    return (
        <>
        <Header/>
        <div className='home'>
        <img className='home__image' src={pic} alt='' />
       
 <div className='home__row'>
    <Product id= "125456" 
                 title="CARL F BUTCHER"
                 price={11.58} 
                 rating={5}
                 image="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/a/carl-f--bucherer-manero-00-10919-08-53-01-multiple-1600840657646-4.jpg" />

     <Product id= "125456" 
                 title="CARL F BUTCHER"
                 price={10.55} 
                 rating={5}
                 image="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/a/carl-f--bucherer-manero-00-10919-08-53-01-multiple-1600840657646-4.jpg" />

     </div>

     <div className='home__row'>
     <Product id= "125456" 
                 title="CARL F BUTCHER"
                 price={11.58} 
                 rating={5}
                 image="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/a/carl-f--bucherer-manero-00-10919-08-53-01-multiple-1600840657646-4.jpg" />

      <Product id= "125456" 
                 title="CARL F BUTCHER"
                 price={11.58} 
                 rating={5}
                 image="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/a/carl-f--bucherer-manero-00-10919-08-53-01-multiple-1600840657646-4.jpg" />

        {/* <Product id= "125456" 
                 title="CARL F BUTCHER"
                 price={11.58} 
                 rating={5}
                 image="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/a/carl-f--bucherer-manero-00-10919-08-53-01-multiple-1600840657646-4.jpg" />             */}
     </div>
    </div>
        </>
    );
}

export default Home
