import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  const { _id, categoryName, condition } = category
  return (
    <div className="card w-96 bg-teal-200 shadow-xl py-5 ml-10">
      <div className="card-body">
        <h2 className="card-title">
          {categoryName}
          <div className="badge badge-secondary">{condition}</div>
        </h2>

        <div className="card-actions py-3">
          <div className="badge badge-primary">Top Rated</div>
          <div className="badge badge-secondary badge-outline">BestSeller</div>
        </div>
        <div>
          <div className='pt-5'>
            <Link  to={`/category/${_id}`}>
            <button className="btn btn-outline btn-secondary font-bold ml-24 ">
              Buy Now
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
