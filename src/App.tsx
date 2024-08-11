import Card from './components/Card'
import './App.css'
import { ProductInterface } from './interfaces'
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState<ProductInterface[]>([])
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const result = await response.json()
    console.log(response)
    setData(result.products)
  }
  useEffect(() => {
    if (data.length === 0) {
      fetchData()
    }
  }, [data])
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          {data.map((product) => (
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

export default App
