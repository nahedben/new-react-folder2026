import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import {useState,useEffect} from'react'
import { HomePage } from './pages/home/HomePage'
import {OrdersPage} from './pages/orders/OrdersPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'

function App() {
const [cartItems,setCartItems]=useState([])

 useEffect(()=>{
  axios.get('api/cart-items?expand=product')
 .then((response)=>{setCartItems(response.data)
}
      )
 },[])

  return (
    <>
   <Routes>
      <Route  index element={<HomePage cartItems={cartItems}/>}/>
      <Route path='checkout' element={<CheckoutPage cartItems={cartItems}/>}/>
      <Route path='orders' element={<OrdersPage cartItems={cartItems}/>}/>
   </Routes>
  
      
      </>
  )
}

export default App
