import React from 'react'
import "./product.css"
function product({rating}) {
  return (
    <div className="bottom__column">

    <div className="product">
      <div className="p_description">
      <p className='productname'>Product Name</p>
      <p className='description'>Description</p>
      <div className='product_rating'>
      {Array(rating).fill().map((_, i) =>
           <p className='rating'>⭐</p>   
      )}
      </div>
     
      </div>
      <div className="p_image">
        <img src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"/>
      </div>
      <span className='button'>
        Add to Basket
      </span>
    </div>
  </div>
  )
}

export default product