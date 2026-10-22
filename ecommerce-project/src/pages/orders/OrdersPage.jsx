import axios from 'axios'
import './OrdersPage.css'
import '../home/HomePage.css'
import Header from '../../components/Header';

import { useEffect, useState } from 'react';

import OrdersGrid from './OrdersGrid';


export function OrdersPage({cartItems}) {

const [orders,setOrders]=useState([])
 
useEffect(()=>{
  const fetchOrdersData= async()=>{
  let response=await axios.get('api/orders?expand=products')
  
    setOrders(response.data)
   
  }
fetchOrdersData()

},[])
// console.log("Orders from OrderPAge:", orders)
//  console.log("cartItems from OrderPAge:", cartItems)


  return (
    <>
   <Header cartItems={cartItems}/>
      <title>Orders Page</title>
<link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
         
<Header cartItems={cartItems}/>
    <div className="orders-page">
      <div className="page-title">Your Orders</div>

      <OrdersGrid orders={orders}/>
    </div>

    </>
    )}
    // export default OrdersPage;