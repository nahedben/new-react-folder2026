import CartItemDetails from "./CartItemDetails"
import DeliveryDate from "./DeliveryDate"
export default function OrderSummary({deliveryOptions , cartItems,loadData}){


  return ( <>  <div className="order-summary">
              {deliveryOptions.length >0 && cartItems.map((item) => {
                const selectedDeliveryOption = deliveryOptions
                .find((option)=> {
                  return option.id === item.deliveryOptionId})
                
                return (
               
                <div key={item.productId} className="cart-item-container">
                 <DeliveryDate selectedDeliveryOption={selectedDeliveryOption}/>
              
                  <CartItemDetails item={item} deliveryOptions={deliveryOptions} loadData={loadData} />
                </div>
                )
  })}
            </div></>)
}