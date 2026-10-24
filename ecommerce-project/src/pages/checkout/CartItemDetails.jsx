import DeliveryOptions from "./DeliveryOptions"
import { priceFormat } from "../../utils/money"

export default function CartItemDetails({item, deliveryOptions,loadData}){
  return(
    <>
    <div className="cart-item-details-grid">
                        <img className="product-image" src={item.product.image} />
      
                        <div className="cart-item-details">
                          <div className="product-name">{item.product.name}</div>
                          <div className="product-price">
                            {priceFormat(item.product.priceCents)}
                          </div>
                          <div className="product-quantity">
                            <span>
                              Quantity:{item.product.quantity}
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
      
                        <DeliveryOptions deliveryOptions={deliveryOptions} item={item}  loadData={ loadData}/>
                      </div>
    </>
  )
}