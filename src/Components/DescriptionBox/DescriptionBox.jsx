import React from 'react'
import "./DescriptionBox.css";
function DescriptionBox() {
    return (
        <div className='descriptionBox'>
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionBox-description">
                <p>An ecommerce website is an online platform that enables businesses to sell products or services over the internet. These websites provide a virtual storefront where customers can browse through various offerings, make purchases, and complete transactions securely. They typically incorporate features such as product catalogs, shopping carts, secure payment gateways, and order management systems</p>
                <p> Ecommerce websites have revolutionized the way businesses operate by offering convenience and accessibility to both consumers and sellers, transcending geographical boundaries and time constraints. With the continuous advancement of technology, ecommerce websites continue to evolve, offering enhanced user experiences and personalized shopping journeys to cater to the diverse needs of today's digital marketplace.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
