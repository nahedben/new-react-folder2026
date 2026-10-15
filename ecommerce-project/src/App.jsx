import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import {useState,useEffect} from'react'
import { HomePage } from './pages/HomePage'
import {OrdersPage} from './pages/OrdersPage'
// import CheckoutPage from './pages/CheckoutPage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'
// import  OrdersPage from './pages/OrdersPage'

function App() {
const [cartItems,setCartItems]=useState([])

 useEffect(()=>{
  axios.get('http://localhost:3000/api/cart-items?expand=product')
 .then((response)=>{setCartItems(response.data)
}
      )
 },[])
//  console.log("Here is the data:==>",cartItems.cartItems)

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
