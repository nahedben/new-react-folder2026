import Header from '../../components/Header';
import {useEffect, useState} from 'react';
import './HomePage.css';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

export function HomePage({cartItems}) {
const [products,setProducts]= useState([])
// console.log("hello")
  useEffect(()=>{
const getData= async()=>{

  const response = await axios.get('/api/products/')
  setProducts(response.data)

} 
getData()

 
},[])
// console.log("HERER IS",cartItems)

  return (
    <>
    <title>Home Page</title>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
    <Header cartItems={cartItems} />

    <div className="home-page">
    <ProductsGrid products={products}/>
    </div>
    </>
  );
}
