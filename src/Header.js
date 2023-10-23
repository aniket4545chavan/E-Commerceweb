import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.pngE"/>
    
   <div className="header__search">
    <input
     className="header__searchInput"
    type="text"/>
       </div>
       <div className="header__nav">
       <span
      className='header__optionLineOne'>Hello Guest
         </span>
      
        <span className="header__optionTwo">Sign In</span>
            
            </div>
            <div className="header__option">
                <span className='header__optionLineOne'>Returns</span>
    
             <span className="header__optionTwo">Orders</span>
          </div>
          <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
    
             <span className="header__optionTwo">Prime</span>
          </div>
       </div>
    
    
  );
}

export default Header
