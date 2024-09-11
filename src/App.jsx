import { useState } from 'react'
import './App.css'
import Product from './layouts/Product'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
function App() {
  

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Product/>} />
      </Routes>
    <Routes>
    <Route path="productdetail/:productId" element={<ProductDetail/>} />
    </Routes>
    
    </Router>
    
      

       
    
  )
}

export default App
