import React from 'react';
import pic from "../src/img/syedanees_transparen.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from "./StateProvider";
import {FaSearch} from 'react-icons/fa';



function Header() {
   const[{basket }] = useStateValue(); 

  console.log(basket);

    return (
    <nav className='header'>
     <Link to = "/">
      <img className='header__logo' src ={pic} alt=""/>
     </Link>
    <div className="header__search">
     <input type = "text" className="header__searchInput" /> 
      <div className='header__searchIcon'><FaSearch/></div>
     </div>

    <div className="header__nav">
     <Link to={"/login"} className="header__link">
      <div  className="header__option">
        <span className='header__optionLineOne'>Hello </span>
        <span className='header__optionLineTwo'>Sign in</span>
      </div>
     </Link>
    
     <Link to="/" className="header__link">
      <div className="header__option">
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>& Orders</span>
      </div>
     </Link>

     <Link to="/" className="header__link">
      <div className="header__option">
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Account</span>
      </div>
    </Link>

    <Link to="/checkout" className='header__link'>
       <div className='header__optionBasket'>
      <ShoppingCartIcon/>
     <span className='header__optionLineTwo header__BasketCount'>{basket?.length}</span>
    </div>
     </Link>
      </div>
       </nav>
    );
}

export default Header; 
