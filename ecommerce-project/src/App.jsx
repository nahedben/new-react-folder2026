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

 useEffect(()=>{
   const getAppData = async() => {

        const response = await axios.get('api/cart-items?expand=product')
        setCartItems(response.data)
 }
      
   getAppData()

 },[])

  return (
    <>
   <Routes>
      <Route  index element={<HomePage cartItems={cartItems}/>}/>
      <Route path='checkout' element={<CheckoutPage cartItems={cartItems}/>}/>
      <Route path='orders' element={<OrdersPage cartItems={cartItems}/>}/>
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cartItems={cartItems}/>}/>
   </Routes>
  
      
      </>
  )
}

export default App
