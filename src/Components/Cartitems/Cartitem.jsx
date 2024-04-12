import React, { useContext } from 'react'
import "./Cartitem.css";
import { ShopContexts } from '../../Contexts/ShopContexts';
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitem = () => {
    const { getTotolcartamount, allproduct, cartitems, removefromcart } = useContext(ShopContexts)
    return (
        <div className='cartitem'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allproduct.map((e) => {
                if (cartitems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                                <p>${e.new_price * cartitems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={() => { removefromcart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotolcartamount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotolcartamount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to CheckOut</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a Promo Code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitem
