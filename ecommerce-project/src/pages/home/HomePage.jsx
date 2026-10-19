import Header from '../../components/Header';
import {useEffect, useState} from 'react';
import './HomePage.css';
import axios from 'axios';
import ProductsGrid from './ProductsGrid';

export function HomePage({cartItems}) {
const [products,setProducts]= useState([])

  useEffect(()=>{
 axios.get('/api/products/').then((response) => {
 setProducts(response.data)
 })
 
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
