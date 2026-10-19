import dayjs from "dayjs"
import { priceFormat } from "../../utils/money"

export default function DeliveryOptions({deliveryOptions,item}){
  return(

    <>
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
    </>
  )
}