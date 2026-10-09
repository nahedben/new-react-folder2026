import './CheckoutPage.css'
import axios from 'axios'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import CheckoutHeader from './CheckoutHeader'
import { priceFormat } from '../../utils/money.js'
export function CheckoutPage({ cartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])

  useEffect(() => {
    axios
      .get('api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data)
      })
      
  }, [])

cartItems.forEach((item) => {console.log(item)})
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions.length >0 && cartItems.map((item) => {
              const selectedDeliveryOption = deliveryOptions
              .find((option)=> {
                return option.id === item.deliveryOptionId})
              
              return (
             
              <div key={item.productId} className="cart-item-container">
                <div className="delivery-date">Delivery date:{dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</div>
            
                <div className="cart-item-details-grid">
                  <img className="product-image" src={item.product.image} />

                  <div className="cart-item-details">
                    <div className="product-name">{item.product.name}</div>
                    <div className="product-price">
                      {priceFormat(item.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity:{' '}
                        <span className="quantity-label">{item.quantity}</span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
                    </div>
                  </div>

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    {deliveryOptions.map((option) => {
                      let price = 'FREE Shipping'
                      if (option.priceCents > 0) {
                        price = `${priceFormat(option.priceCents)}- Shipping`
                      }
                      return (
                        <div key={option.id} className="delivery-option">
                          <input
                            type="radio"
                            checked={option.id === item.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${item.id}`}
                          />
                          <div>
                            <div className="delivery-option-date">
                              {dayjs(option.estimatedDeliveryTimeMs).format(
                                'dddd, MMMM D',
                              )}
                            </div>
                            <div className="delivery-option-price">{price}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>)
})}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
            <div>Nothing was added to your order yet.</div>
          </div>
        </div>
      </div>
    </>
  )
}

// export default CheckoutPage;
