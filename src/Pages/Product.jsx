import React, { useContext } from 'react'
import { ShopContexts } from '../Contexts/ShopContexts'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproduct from '../Components/Relatedproducts/Relatedproduct';
function Product() {
  const { allproduct } = useContext(ShopContexts);
  const { productId } = useParams();
  const product = allproduct.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Relatedproduct/>
    </div>
  )
}

export default Product
