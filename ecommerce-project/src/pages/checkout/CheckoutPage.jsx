import './CheckoutPage.css'
import axios from 'axios'
// import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import CheckoutHeader from './CheckoutHeader'
import OrderSummary from './OrderSummary.jsx'
import PaymentSummary from './PaymentSummary.jsx'


export function CheckoutPage({ cartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)
// console.log("from checkout", cartItems)
  useEffect(() => {
    axios
      .get('api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data)
      })

   axios.get('api/payment-summary').then((response) => {
      setPaymentSummary(response.data)
    })
  }, [])
// console.log("from th toplevel",cartItems)
// cartItems.forEach((item) => {console.log(item)})
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cartItems={cartItems}/>

         
          <PaymentSummary paymentSummary={paymentSummary}/>
            <div>Nothing was added to your order yet.</div>
          
        </div>
      </div>
    </>
  )
}

// export default CheckoutPage;
