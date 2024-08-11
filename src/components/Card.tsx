import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ProductInterface } from '../interfaces'
import 'react-lazy-load-image-component/src/effects/blur.css'
import StarRatings from 'react-star-ratings'
import './card.css'
interface Props {
  product: ProductInterface
}

const Card: React.FC<Props> = ({ product }) => {
  const calculatedFirstPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2)

  return (
    <div className='card text-center shadow-sm' style={{ cursor: 'pointer' }}
    onClick={()=>window.open(`/product/${product.id}`)}>
      <div className='position-relative overflow-hidden rounded'>
        <LazyLoadImage
          className='card-img-top rounded'
          src={product.thumbnail}
          alt={product.title}
          effect='blur'
          style={{ height: '28vh', objectFit: 'cover' }}
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title fs-5'>{product.title}</h5>
        <StarRatings
          rating={product.rating}
          starRatedColor='gold'
          numberOfStars={5}
          starDimension='20px'
          starSpacing='2px'
          name='rating'
        />
        <div className='d-flex justify-content-center align-items-center mt-2'>
          <p
            className='text-muted text-decoration-line-through me-2'
            style={{ fontSize: '1rem' }}
          >
            ${calculatedFirstPrice}
          </p>
          <div className='bg-danger text-white px-2 rounded'>
            -{product.discountPercentage}%
          </div>
        </div>
        <p className='card-text text-dark fw-bold fs-4'>${product.price}</p>
      </div>
    </div>
  )
}

export default Card
