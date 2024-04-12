import react, { createContext, useState } from 'react'
import allproduct from "../Components/Assets/all_product"
export const ShopContexts = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allproduct.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartitems, setcartitems] = useState(getDefaultCart())
    const addtocart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        console.log(cartitems);
    }
    const removefromcart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }
    const getTotolcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let Iteminfo = allproduct.find((product) => product.id === Number(item));
                totalamount += Iteminfo.new_price * cartitems[item];
            }
        }
        return totalamount;
    }
    const contextValue = { getTotolcartamount, allproduct, cartitems, addtocart, removefromcart };
    console.log(cartitems);
    return (
        <ShopContexts.Provider value={contextValue}>
            {props.children}
        </ShopContexts.Provider>
    )
}
export default ShopContextProvider;

