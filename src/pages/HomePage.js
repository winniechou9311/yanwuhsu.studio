import React from 'react'
import { Link } from 'react-router-dom'
import ProductMenu from 'src/components/image/ProductMenu';
import Content from 'src/components/image/Content';


const HomePage = () => {
  return (
    <div>
      <ProductMenu />
      <Content />
    </div>
  )
}

export default HomePage;