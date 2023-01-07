import React from "react";
import "./Home.css";
import Product from './product';

function home() {
  return (
    <div className="home">
      <div className="upper__column">
        <div className="home__bgimg">
          <img
            src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg"
            alt
          />
        </div>
        <div className='product_home'>
      <Product rating={5}/>
      <Product rating={5}/>
      <Product rating={5}/>
      </div>
      <div className='product_home'>
      <Product rating={5}/>
      <Product rating={5}/>
      <Product rating={5}/>
      </div>
      <div className='product_home'>
      <Product rating={5}/>
      <Product rating={5}/>
      <Product rating={5}/>
      </div>
        
      </div>
    </div>
  );
}

export default home;
