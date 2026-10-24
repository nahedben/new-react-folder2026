import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import {useState,useEffect} from'react'
import { HomePage } from './pages/home/HomePage'
import {OrdersPage} from './pages/orders/OrdersPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import TrackingPage from './pages/track/TrackingPage'
import './App.css'

function App() {
const [cartItems,setCartItems]=useState([])
const loadData = async() => {

        const response = await axios.get('api/cart-items?expand=product')
        setCartItems(response.data)
        // console.log("data from load", response.data)
 }

 useEffect(()=>{  
      
   loadData()
 },[])

  return (
    <>
   <Routes>
      <Route  index element={<HomePage cartItems={cartItems} loadData={loadData}/>}/>
      <Route path='checkout' element={<CheckoutPage cartItems={cartItems} loadData={loadData}/>}/>
      <Route path='orders' element={<OrdersPage cartItems={cartItems}/>}/>
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cartItems={cartItems}/>}/>
   </Routes>
  
      
      </>
  )
}

export default App
