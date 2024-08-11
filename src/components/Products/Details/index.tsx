import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductInterface } from '../../../interfaces'

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductInterface | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='img-fluid rounded'
          />
        </div>
        <div className='col-md-6'>
          <h1 className='display-4'>{product.title}</h1>
          <p className='lead'>{product.description}</p>
          <p className='text-muted'>
            <strong>Category:</strong> {product.category}
          </p>
          <p className='text-muted'>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className='text-muted'>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className='text-danger'>
            <strong>Price: ${product.price}</strong>
          </p>
          <p className='text-muted text-decoration-line-through'>
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </p>
          <div className='bg-danger text-white px-2 rounded d-inline-block'>
            -{product.discountPercentage}%
          </div>
          <div className='mt-4'>
            <strong>Reviews:</strong>
            {product.reviews.map((review, index) => (
              <div key={index} className='mt-2'>
                <p>
                  <strong>{review.reviewerName}</strong>: {review.comment}
                </p>
                <p className='text-muted'>
                  Rating: {review.rating} / 5 - {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
