import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { useProducts } from '../../context/products'
import './products.css'
const Products = () => {
  const { products, setProducts } = useProducts()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const result = await response.json()
      setProducts(result.products)
    } catch (error) {
      alert('please check ip and connection')
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      fetchData()
    } else {
      setLoading(false)
    }
  }, [products])

  const placeholders = new Array(10).fill(null)

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          {loading
            ? placeholders.map((_, index) => (
                <div
                  key={index}
                  className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'
                >
                  <div className='card placeholder-card'>
                    <div className='placeholder-img' />
                    <div className='placeholder-body'>
                      <div className='placeholder-title' />
                      <div className='placeholder-rating' />
                      <div className='placeholder-price' />
                    </div>
                  </div>
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'
                >
                  <Card product={product} />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Products
