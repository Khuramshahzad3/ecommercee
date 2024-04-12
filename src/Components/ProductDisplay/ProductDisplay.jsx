import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png"
import stardull_icon from "../Assets/star_dull_icon.png"
import { ShopContexts } from "../../Contexts/ShopContexts";
const ProductDisplay = (props) => {
    const { product } = props;
    const { addtocart } = useContext(ShopContexts)

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="prductdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt=" " />
                    <img src={star_icon} alt=" " />
                    <img src={star_icon} alt=" " />
                    <img src={star_icon} alt=" " />
                    <img src={stardull_icon} alt=" " />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">

                    This shirt exudes casual elegance with its soft cotton fabric and timeless striped pattern. Perfect for both work and play, its tailored fit ensures a flattering silhouette, while the classic collar adds a touch of sophistication.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addtocart(product.id) }}>ADD TO CART</button>
                <p className=" productdisplay-right-category"><span>Category: </span> Women, T-Shirt and Crop Top</p>
                <p className=" productdisplay-right-category"><span>Tags: </span>Latest, Modern</p>



            </div>
        </div>
    );
}

export default ProductDisplay;
