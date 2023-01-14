import React from 'react'
import banner1 from '../../../assets/Banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full mt-2 rounded">
        <div id="item1" className="carousel-item w-full">
          {/* <img src={banner3} className="w-full" /> */}
          <img src={banner3} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          {/* <img src={banner2} className="w-full" /> */}
          <img src={banner2} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
        <img src={banner1} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-5 gap-2">
        <a href="#item1" className="btn bg-white text-secondary btn-xs">
          First
        </a>
        <a href="#item2" className="btn  bg-white text-secondary btn-xs">
          Second
        </a>
        <a href="#item3" className="btn  bg-white text-secondary btn-xs">
          Third
        </a>
      </div>
    </div>
  )
}

export default Banner
