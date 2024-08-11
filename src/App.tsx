import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Details from './components/Products/Details'
import { ProductsProvider } from './context/products'

const App = () => {
  return (
    <ProductsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:id' element={<Details />} />
          </Routes>
        </Router>
    </ProductsProvider>
  )
}

export default App
