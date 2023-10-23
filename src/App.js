import React from "react";
import "./App.css";
import Header from './Header';

function App() {
  return (
    <div className="app">
      <h1>Amazon App Clone</h1>
      <div className='header'>
      <img className
      ="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
    
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
    
    </div>
  );
}

export default App;
