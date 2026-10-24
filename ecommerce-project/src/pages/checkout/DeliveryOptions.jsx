import dayjs from "dayjs"
import { priceFormat } from "../../utils/money"

import axios from "axios"
export default function DeliveryOptions({deliveryOptions,item,loadData}){
 
  
  const updateDeliveryOption =async (optionId) =>{
   await axios.put(`/api/cart-items/${item.productId}`,{
      deliveryOptionId:optionId,
    })
     loadData()
  }
  
  
  
 
  return(

    <>
    <div className="delivery-options">
                          <div className="delivery-options-title">
                            Choose a delivery option:
                          </div>
                          {deliveryOptions.map((option) => {
                            // console.log("From DeleveryOptions",option.id,"===",item.deliveryOptionId)
                            let price = 'FREE Shipping'
                            if (option.priceCents > 0) {
                              price = `${priceFormat(option.priceCents)}- Shipping`
                            }
                            return (
                              <div key={option.id} className="delivery-option"
                               onClick={()=>updateDeliveryOption(option.id)} >
                                <input
                                   onChange={() => updateDeliveryOption(option.id)}
                                  type="radio"
                                  checked={option.id == item.deliveryOptionId}
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
    </>
  )
}