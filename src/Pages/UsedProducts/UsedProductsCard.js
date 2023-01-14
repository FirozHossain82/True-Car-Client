import React from 'react'

const UsedProductsCard = ({ category,setProductInfo }) => {
  const {
    _id,
    categoryName,
    productName,
    sellerName,
    yearsOfUse,
    img,
    resalePrice,
    originalPrice,
    location,
    postingTime,
  } = category
  return (
    <div>
      <div className="card  bg-sky-200 shadow-xl h-full ">
        <figure className="px-10 pt-10 ">
          <img src={img} alt="Shoes" className="rounded-xl h-64" />
        </figure>
        <div className="card-body items-center text-center font-medium">
  <h2 className="card-title text-orange-800 font-bold">{productName}</h2>
  <p>sellerName: {sellerName}</p>
  <p>Years Of Use: {yearsOfUse}</p>
  <p>resalePrice: {resalePrice}</p>
  <p>originalPrice: {originalPrice}</p>
  <p>location: {location}</p>
  <p>postingTime :{postingTime}</p>
          <div className="card-actions">
            
            <label onClick={() => setProductInfo(category)} htmlFor="booking-modal" className="btn btn-outline btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsedProductsCard
