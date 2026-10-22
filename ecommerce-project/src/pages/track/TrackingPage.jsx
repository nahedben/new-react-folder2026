import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './TrackingPage.css'
import axios from 'axios'
import dayjs from 'dayjs'
export default function TrackingPage({ cartItems }) {
  const { orderId, productId } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const fetchTrackingData = async () => {
      let response = await axios.get(`/api/orders/${orderId}?expand=products`)
      setOrder(response.data)
    }
    fetchTrackingData()
  }, [orderId])

  if (!order) {
    return <h2>loading....!</h2>
  }
  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId
  })
let totalDeliveryTimeMs=orderProduct.estimatedDeliveryTimeMs-order.orderTimeMs


const timePassedMS= dayjs().valueOf() - order.orderTimeMs
const  deliveryProgress = ()=>{
  let percentage = (timePassedMS / totalDeliveryTimeMs)*100*0.01

 if  (percentage<100){
  return percentage
 }else return 100
}
 let isPrepared=false
 let isShipped=false
 let isDelivered=false
if(deliveryProgress()<=33){
  isPrepared=true
}
if(deliveryProgress()>33 && deliveryProgress()<100){
   isShipped=true
}
if(deliveryProgress()>=100){
   isDelivered=true
}

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {deliveryProgress() === 100 ? "Delivered on":"Arriving on :"}
            {dayjs(order.estimateDeliveryTimeMs).format('dddd DD MMMM ')}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPrepared ? 'current-status' : ''}`}>Preparing</div>
            <div className={`progress-label ${isShipped ? 'current-status' : ''}`}>Shipped</div>
            <div className= {`progress-label ${isDelivered ? 'current-status' : ''}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{width:`${deliveryProgress()}%`}}></div>
          </div>
        </div>
      </div>
    </>
  )
}
